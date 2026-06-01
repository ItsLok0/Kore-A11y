import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import React from "react";

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    as: HeadingTag;
    level?: HeadingLevel;
}

// Création des styles de chaque level de heading
const levelStyles: Record<HeadingLevel, string> = {
    1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    2: 'scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl',
    3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    5: 'text-lg font-semibold tracking-tight',
    6: 'text-base font-semibold tracking-tight',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    (
        {
            children,
            as = 'span',
            level,
            className,
            ...props
        }, ref
    ) => {
        const HeadingComponent = as;
        const visualLevel = level || (as === 'span' ? 6 : parseInt(as.slice(1)) as HeadingLevel);

        return (
            <HeadingComponent
                ref={ref}
                className={cn(
                    levelStyles[visualLevel],
                    className
                )}
                {...props}
            >
                {children}
            </HeadingComponent>
        );
    }
);

Heading.displayName = 'Heading';