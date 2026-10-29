'use client';

import { cn } from "@/lib/utils";
import { useState, useId, forwardRef, cloneElement, isValidElement } from "react";
import {
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useDismiss,
  safePolygon,
  offset,
  flip,
  shift,
  autoUpdate,
} from '@floating-ui/react';
import { Placement } from "@floating-ui/react";

{/** Props du tooltip */}
interface TooltipProps {
  content: string;
  placement?: Placement;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

{/** Composant Tooltip */}
export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
        content,
        placement = "top",
        delay = 300,
        children,
        className
    }, ref
) => {
    {/** Variable pour afficher ou non le tooltip */}
    const [isOpen, setIsOpen] = useState(false);
    const tooltipId = useId();

    {/** Donner une position et un context au tooltip */}
    const {refs, floatingStyles, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: placement,
        middleware: [
            offset(10),
            flip({
                fallbackAxisSideDirection: "start",
            }),
            shift()],
        whileElementsMounted: autoUpdate,
    });

    {/** Création des intéractions */}
    const hover = useHover(context, {
        move: false,
        delay: { open: delay, close: 0 },
        // WCAG 1.4.13 : le contenu reste affiché quand le pointeur passe sur le tooltip
        handleClose: safePolygon(),
    });
    const focus = useFocus(context);
    const dismiss = useDismiss(context, { escapeKey: true, outsidePress: false });

    {/** Récupérer les interactions pour les passer en prop */}
    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
        focus,
        dismiss,
    ]);

    {/** Le lien tooltip -> élément focusable se fait sur l'enfant (pas sur le span englobant) */}
    const describedBy = isOpen ? tooltipId : undefined;
    const trigger = isValidElement<Record<string, unknown>>(children)
        ? cloneElement(children, { 'aria-describedby': describedBy })
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
                {...(isValidElement(children) ? {} : { 'aria-describedby': describedBy })}
                {...getReferenceProps()}
                className={cn("inline-flex", className)}
            >
                {trigger}
            </span>

            {/** Tooltip */}
            {isOpen && (
                <div
                    ref={refs.setFloating}
                    id={tooltipId}
                    role="tooltip"
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className="max-w-xs rounded-md px-3 py-1.5 text-sm bg-neutral text-neutral-fg shadow-md"
                >
                    {content}
                </div>
            )}
        </>
    )
});

Tooltip.displayName = 'Tooltip';