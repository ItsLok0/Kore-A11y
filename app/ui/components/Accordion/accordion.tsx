'use client';

import { cn } from "@/lib/utils";
import React, { useId, forwardRef, useState } from "react";
import { Heading } from "@/app/ui/components/heading";
import { Button } from "@/app/ui/components/Button/button";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

{/* Déclaration des interfaces et type accordion */}
interface AccordionSectionProps {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
}

interface AccordionItemProps {
    section: AccordionSectionProps;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    isLast: boolean;
}

export type AccordionProps = {
  sections: AccordionSectionProps[];
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

{/* Composant AccordionItem */}
const AccordionItem = (
    {
        section,
        headingLevel = 3,
        isLast
    }: AccordionItemProps
) => {
    {/* Génération ID + état ouvert/fermé */}
    const id = useId();
    const triggerId = `${id}-trigger`;
    const panelId = `${id}-panel`;
    const [isOpen, setIsOpen] = useState(section.defaultOpen ?? false);

    return (
        <div className={cn(!isLast && "border-b-2 border-primary")}>
            {/* En-tête */}
            <Heading as={`h${headingLevel}`}>
                <Button
                    id={triggerId}
                    variant="ghost"
                    iconRight={faAngleDown}
                    className={cn(
                        "w-full h-14 justify-between px-2 py-6",
                        "not-disabled:active:scale-[1]",
                        "focus-visible:shadow-none",
                        "focus-visible:*:shadow-(--focus-ring)",
                        "[&_svg]:motion-safe:transition-transform [&_svg]:motion-safe:duration-200",
                        isOpen && "[&_svg]:rotate-180",
                        section.disabled && "cursor-not-allowed opacity-50"
                    )}
                    disabled={section.disabled}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {section.title}
                </Button>
            </Heading>

            {/* Panel */}
            <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={cn(
                    "grid motion-safe:transition-[grid-template-rows] motion-safe:duration-200 motion-safe:ease-in-out",
                    "border-t",
                    !isOpen && "hidden"
                )}
            >
                <div className="overflow-hidden">
                    <div className="p-4 text-sm text-text-secondary">
                        {section.content}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

{/* Composant Accordion */}
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    (
        {
            sections,
            headingLevel = 3,
            className,
        }, ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "w-full border-t border-primary border-2 rounded-2xl",
                    "*:first:*:*:first:rounded-t-2xl *:last:*:*:last:rounded-b-2xl",
                    className
                )}
            >
                {/* Boucle sur les sections */}
                {sections.map((section, index) => (
                    <AccordionItem
                        key={index}
                        section={section}
                        headingLevel={headingLevel}
                        isLast={index === sections.length - 1}
                    />
                ))}
            </div>
        );
    }
);

Accordion.displayName = "Accordion";