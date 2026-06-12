'use client';

import { cn } from "@/lib/utils";
import { useState, forwardRef, useId, useEffect, useRef } from "react";
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

{/** Focus trap */}
const useFocusTrap = (ref: React.RefObject<HTMLDivElement | null>, isActive: boolean) => {
  useEffect(() => {
    if (!isActive || !ref.current) return;
 
    const container = ref.current;
 
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
 
      const focusable = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) { e.preventDefault(); return; }
 
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
 
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
 
    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [isActive, ref]);
};

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
        const triggerRef = useRef<HTMLSpanElement | null>(null);
        const floatingRef = useRef<HTMLDivElement | null>(null);

        const resolvedContent = typeof content === 'function' 
            ? content(() => setIsOpen(false)) 
            : content;
        
        {/** Variable pour afficher ou non la popover */}
        const [isOpen, setIsOpen] = useState(false);

        {/** Focus trap pour le mode dialog */}
        useFocusTrap(floatingRef, isDialog && isOpen);

        useEffect(() => {
            if (!isOpen) {
                triggerRef.current?.focus();
            }
        }, [isOpen]);

        {/** Donner une position et un context à la popover */}
        const {refs, floatingStyles, context} = useFloating({
            open: isOpen,
            onOpenChange: setIsOpen,
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

        return (
            <>
                {/** Trigger */}
                <span
                    ref={(el) => {
                        refs.setReference(el);
                        if (typeof ref === 'function') ref(el);
                        else if (ref) ref.current = el;
                    }}
                    {...triggerAriaProps}
                    {...getReferenceProps()}
                    className={cn("inline-flex", className)}
                >
                    {children}
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
                                    <Text variant="small" className="text-text-muted">
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