'use client';

import { cn } from "@/lib/utils";
import { useState, forwardRef } from "react";
import {
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useDismiss,
  useRole,
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
    const hover = useHover(context, { move: false, delay: { open: delay, close: 0 } });
    const focus = useFocus(context);
    const dismiss = useDismiss(context, { escapeKey: true, outsidePress: false });
    const role = useRole(context, {
        role: 'tooltip'
    })

    {/** Récupérer les interactions pour les passer en prop */}
    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ]);

    return (
        <>
            {/** Trigger */}
            <span
                ref={(el) => {
                    refs.setReference(el);
                    if (typeof ref === 'function') ref(el);
                    else if (ref) ref.current = el;
                }}
                {...getReferenceProps()}
                className={cn("inline-flex", className)}
            >
                {children}
            </span>

            {/** Tooltip */}
            {isOpen && (
                <div
                    ref={refs.setFloating}
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