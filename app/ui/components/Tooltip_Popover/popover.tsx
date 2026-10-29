'use client';

import { cn } from "@/lib/utils";
import { useState, forwardRef, useId, useEffect, useRef, cloneElement, isValidElement } from "react";
import {
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  offset,
  flip,
  shift,
  autoUpdate,
} from '@floating-ui/react';
import { Placement } from "@floating-ui/react";
import { Heading } from "@/app/ui/components/heading";
import { Text } from "@/app/ui/components/text";
import { useFocusTrap } from "@/app/hooks/useFocusTrap";

{/** Props du popover */}
interface PopoverProps {
    content: React.ReactNode | ((onClose: () => void) => React.ReactNode);
    placement?: Placement;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
    // Mode dialog
    isDialog?: boolean;
    dialogTitle?: string;
    dialogDescription?: string;
}

{/** Composant Popover */}
export const Popover = forwardRef<HTMLSpanElement, PopoverProps>(
    (
        {
            content,
            placement = "bottom",
            children,
            className,
            contentClassName,
            isDialog = false,
            dialogTitle,
            dialogDescription,
        }, ref
    ) => {
        {/** Variables */}
        const popoverId = useId();
        const titleId = useId();
        const descId = useId();
        const floatingRef = useRef<HTMLDivElement | null>(null);
        const openerRef = useRef<HTMLElement | null>(null);
        const restoreFocusRef = useRef(false);

        {/** Variable pour afficher ou non la popover */}
        const [isOpen, setIsOpen] = useState(false);

        {/** Mémorise l'élément à re-focuser, et ne rend le focus que s'il était dans la popover */}
        const handleOpenChange = (open: boolean) => {
            if (open) {
                openerRef.current = document.activeElement as HTMLElement | null;
            } else {
                restoreFocusRef.current = !!floatingRef.current?.contains(document.activeElement);
            }
            setIsOpen(open);
        };

        const resolvedContent = typeof content === 'function'
            ? content(() => handleOpenChange(false))
            : content;

        {/** Focus trap pour le mode dialog */}
        useFocusTrap(floatingRef, isDialog && isOpen);

        useEffect(() => {
            if (isOpen) {
                // Mode dialog : le focus entre dans la popover à l'ouverture
                if (isDialog) floatingRef.current?.focus();
                return;
            }
            if (restoreFocusRef.current) {
                openerRef.current?.focus();
                restoreFocusRef.current = false;
            }
        }, [isOpen, isDialog]);

        {/** Donner une position et un context à la popover */}
        const {refs, floatingStyles, context} = useFloating({
            open: isOpen,
            onOpenChange: handleOpenChange,
            placement: placement,
            middleware: [
                offset(10),
                flip({
                    fallbackAxisSideDirection: "start",
                }),
                shift()
            ],
            whileElementsMounted: autoUpdate,
        })

        {/** Création des intéractions */}
        const click = useClick(context);
        const dismiss = useDismiss(context);

        {/** Récupérer les interactions pour les passer en prop */}
        const {getReferenceProps, getFloatingProps} = useInteractions([
            click,
            dismiss,
        ]);

        {/** Props ARIA selon le mode */}
        const triggerAriaProps = isDialog
        ? {
            'aria-haspopup': 'dialog' as const,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? popoverId : undefined,
            }
        : {
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? popoverId : undefined,
            };
    
        const floatingAriaProps = isDialog
        ? {
            role: 'dialog' as const,
            'aria-modal': false,
            'aria-labelledby': dialogTitle ? titleId : undefined,
            'aria-describedby': dialogDescription ? descId : undefined,
            }
        : {};

        {/** Les attributs ARIA vont sur l'enfant interactif (bouton), pas sur le span englobant */}
        const trigger = isValidElement<Record<string, unknown>>(children)
            ? cloneElement(children, triggerAriaProps)
            : children;

        return (
            <>
                {/** Trigger */}
                <span
                    ref={(el) => {
                        refs.setReference(el);
                        if (typeof ref === 'function') ref(el);
                        else if (ref) ref.current = el;
                    }}
                    {...(isValidElement(children) ? {} : triggerAriaProps)}
                    {...getReferenceProps()}
                    className={cn("inline-flex", className)}
                >
                    {trigger}
                </span>

                {/** Popover */}
                {isOpen && (
                    <div
                        ref={(el) => {
                            floatingRef.current = el;
                            refs.setFloating(el);
                        }}
                        id={popoverId}
                        tabIndex={isDialog ? -1 : undefined}
                        style={floatingStyles}
                        {...floatingAriaProps}
                        {...getFloatingProps()}
                        className={cn(
                            // Base
                            "z-50 min-w-55 max-w-sm",
                            "rounded-lg border border-border-subtle bg-bg-surface",
                            "shadow-lg",
                            "motion-safe:animate-fade-in",
                            // Séparation visuelle claire
                            isDialog ? "p-5" : "p-4",
                            contentClassName
                        )}
                    >
                        {/* En-tête dialog */}
                        {isDialog && (dialogTitle || dialogDescription) && (
                            <div className="mb-4 flex flex-col gap-1 border-b border-border-subtle pb-3">
                                {dialogTitle && (
                                <Heading as="h2" id={titleId} level={5}>
                                    {dialogTitle}
                                </Heading>
                                )}
                                {dialogDescription && (
                                    <Text id={descId} variant="small" className="text-text-muted">
                                        {dialogDescription}
                                    </Text>
                                )}
                            </div>
                        )}
                        {resolvedContent}
                    </div>
                )}
            </>
        )
    }
);

Popover.displayName = 'Popover';