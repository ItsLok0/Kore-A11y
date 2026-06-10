'use client';

import { cn } from "@/lib/utils";
import React, { forwardRef, useId, useRef, useState } from "react";
import { Heading, HeadingTag } from "@/app/ui/components/heading";
import { Button } from "@/app/ui/components//Button/button";

{/* Déclaration de l'interface et du type tabProps */}
interface TabSectionProps {
  title: string;
  content: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
}

export type TabProps = {
    title: string;
    titleLevel?: HeadingTag;
    className?: string;
    sections: TabSectionProps[];
}

{/** TabButton : liste des bouttons pour changer de section */}
interface TabButtonProps {
  tabId: string;
  tabPanelId: string;
  label: string;
  isActive: boolean;
  disabled?: boolean;
  onSelect: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const TabButton = forwardRef<HTMLButtonElement, TabButtonProps> (
    (
        {
            tabId,
            tabPanelId,
            label,
            isActive,
            disabled,
            onSelect,
            onKeyDown
        }, ref
    ) => {
        return (
            <Button
                ref={ref}
                id={tabId}
                role="tab"
                variant={isActive ? "primary" : "outline"}
                tabIndex={isActive ? 0 : -1}
                disabled={disabled}
                aria-selected={isActive}
                aria-controls={tabPanelId}
                onClick={onSelect}
                onKeyDown={onKeyDown}
                className={cn(
                    "border-b-0 rounded-b-none",
                    disabled && "cursor-not-allowed opacity-50 pointer-events-none"
                )}
            >
                {label}
            </Button>
        );
    }
);

{/** TabPanel : Affichage du contenu */}
interface TabPanelProps {
  tabPanelId: string;
  tabId: string;
  content: React.ReactNode;
  isActive: boolean;
}
 
const TabPanel = (
    {
        tabPanelId,
        tabId,
        content,
        isActive
    }: TabPanelProps
 ) => {
    return (
        <div
            id={tabPanelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isActive}
            className={cn(
                "p-4 focus-visible:outline-none focus-visible:shadow-(--focus-ring)",
                "rounded-b-md rounded-tr-md"
            )}
        >
            {content}
        </div>
    );
};

{/** Tab : Composant principal */}
export const Tab = forwardRef<HTMLDivElement, TabProps>(
    (
        {
            title,
            titleLevel = 'h3',
            className,
            sections,
            ...props
        }, ref
    ) => {
        {/** Génération des id + tableau des bouttons  */}
        const id = useId();
        const tabListId = `tablist-${id}`;
        const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

        const defaultIndex = Math.max(
            sections.findIndex((s) => s.isActive),
            0
        );
        const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

        {/** Gérer la navigation clavier pour changer les états */}
        const handleKeyDown = (e: React.KeyboardEvent, index: number) => {

            {/** Récupérationn des bouttons utilisables (non disabled) */}
            const enabledIndexes = sections
                .map((s, i) => (!s.disabled ? i : null))
                .filter((i): i is number => i !== null);

            const currentPos = enabledIndexes.indexOf(index);
        
            let nextIndex: number | null = null;
        
            if (e.key === "ArrowRight") {
                nextIndex = enabledIndexes[(currentPos + 1) % enabledIndexes.length];
            } else if (e.key === "ArrowLeft") {
                nextIndex = enabledIndexes[(currentPos - 1 + enabledIndexes.length) % enabledIndexes.length];
            } else if (e.key === "Home") {
                nextIndex = enabledIndexes[0];
            } else if (e.key === "End") {
                nextIndex = enabledIndexes[enabledIndexes.length - 1];
            }
        
            if (nextIndex !== null) {
                e.preventDefault();
                setActiveIndex(nextIndex);
                tabButtonRefs.current[nextIndex]?.focus();
            }
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "w-full",
                    className
                )}
                {...props}
            >
                {/** Titre */}
                <Heading
                    as={titleLevel}
                    id={tabListId}
                    className="mb-3"
                >
                    {title}
                </Heading>

                {/** Tablist */}
                <div
                    role="tablist"
                    aria-labelledby={tabListId}
                    className="flex gap-2 border-b border-primary"
                >
                    {sections.map((section, index) => {
                        const tabId = `tab-${id}-${index}`;
                        const tabPanelId = `tabpanel-${id}-${index}`;

                        return (
                            <TabButton
                                ref={(el) => { tabButtonRefs.current[index] = el; }}
                                key={index}
                                tabId={tabId}
                                tabPanelId={tabPanelId}
                                label={section.title}
                                isActive={activeIndex === index}
                                disabled={section.disabled}
                                onSelect={() => !section.disabled && setActiveIndex(index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            >

                            </TabButton>
                        );
                    })}
                </div>

                {/** Tabpanel */}
                {sections.map((section, index) => {
                    const tabId = `tab-${id}-${index}`;
                    const tabPanelId = `tabpanel-${id}-${index}`;

                    return (
                        <TabPanel
                            key={tabPanelId}
                            tabPanelId={tabPanelId}
                            tabId={tabId}
                            content={section.content}
                            isActive={activeIndex === index}
                        />
                    );
                })}
            </div>
        );
    }
);

Tab.displayName = "Tab";