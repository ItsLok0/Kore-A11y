import { cn } from "@/lib/utils";
import React, { useId, useRef, useEffect, forwardRef } from "react";
import { Heading } from "@/app/ui/components/heading";
import { Button } from "@/app/ui/components/Button/button";
import { Text } from "@/app/ui/components/text";

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    closeBtn?: boolean;
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
    (
        {
            isOpen,
            onClose,
            title,
            description,
            children,
            className,
            closeBtn = false,
        }, ref
    ) => {
        const id = useId();
        const dialogRef = useRef<HTMLDialogElement>(null);
        const resolvedRef = (ref as React.RefObject<HTMLDialogElement>) ?? dialogRef;
        const triggerRef = useRef<HTMLElement | null>(null);

        // Ouverture et fermeture
        useEffect(() => {
            const dialog = resolvedRef.current;
            if (!dialog) return;

            if (isOpen) {
                // Enregistre le dernier focus
                triggerRef.current = document.activeElement as HTMLElement;

                dialog.showModal();
                dialog.focus();
                document.body.style.overflow = "hidden";
            } else {
                dialog.close();
                document.body.style.overflow = "";

                // Restaure le focus
                triggerRef.current?.focus();
            }
        }, [isOpen]);

        // Focus trap
        const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
            if (e.key !== 'Tab') return;

            const dialog = resolvedRef.current;
            if (!dialog) return;

            // Sélectionne tous les éléments focusables à l'intérieur du modal
            const focusable = resolvedRef.current?.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
            );
            if (!focusable?.length){
                e.preventDefault();
                return;
            }
            const first = triggerRef.current = focusable[0];
            const last = focusable[focusable.length - 1];
            const currentActive = document.activeElement;

            // Si focus encore sur le dialog
            if (currentActive === dialog) {
                e.preventDefault();
                if (e.shiftKey) {
                    last.focus();
                } else {
                    first.focus();
                }
                return;
            }

            // Focus trap
            if (e.shiftKey && currentActive === first) {
                e.preventDefault(); 
                last.focus();
            } else if (!e.shiftKey && currentActive === last) {
                e.preventDefault(); 
                first.focus();
            }
        };

        return (
            <dialog
                ref={resolvedRef}
                onKeyDown={handleKeyDown}
                onClose={onClose}
                onClick={(e) => e.target === e.currentTarget && onClose()}
                id={id}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${id}-title`}
                aria-describedby={description ? `${id}-desc` : undefined}
                className={cn(
                    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "bg-surface rounded-lg shadow-lg p-6 ",
                    className
                )}
            >
                <Heading
                    as="h2"
                    id={`${id}-title`}
                    className="mb-6"
                >
                    {title}
                </Heading>
                {description && (
                    <Text as="p" id={`${id}-desc`}>
                        {description}
                    </Text>
                )}
                <div>{children}</div>
                {!closeBtn && (
                    <div className="mt-6 flex justify-end gap-4">
                        <Button
                            variant="secondary"
                            size="md"
                            onClick={onClose}
                            aria-label="Fermer la boite de dialogue"
                        >
                            Fermer
                        </Button>
                    </div>
                )}
            </dialog>
        );
    }
);

Modal.displayName = "Modal";