import { cn } from "@/lib/utils";
import React, { useId } from "react";
import { Heading, HeadingTag } from "@/app/ui/components/heading";
import Link from "next/link";

type CardBaseProps = {
    children: React.ReactNode;
    className?: string;
    title: string;
    titleLevel?: HeadingTag;
}

type CardLinkProps = CardBaseProps & { href: string; }
type CardStaticProps = CardBaseProps & { href?: never; }

export type CardProps = CardLinkProps | CardStaticProps;

export const Card = React.forwardRef<HTMLElement, CardProps>(
    (
        {
            children,
            className,
            title,
            titleLevel = 'h3',
            href,
            ...props
        }, ref
    ) => {
        const generateId = useId();

        return (
            <article
                ref={ref}
                className={cn(
                    "relative has-[a:focus-visible]:shadow-(--focus-ring)",
                    className
                )}
                {...props}
            >
                <Heading as={titleLevel}>
                    {href ? (
                        <Link
                            id={generateId}
                            tabIndex={0}
                            href={href}
                            className={cn(
                                "hover:underline focus-visible:underline",
                                "focus-visible:outline-none focus-visible:shadow-none rounded-[--radius-sm]",     
                                "after:absolute after:inset-0"
                        )}  
                    >
                        {title}
                    </Link>
                    ) : title}
                </Heading>
                <div className="mt-2">
                    {children}
                </div>
            </article>
        )
    }
);

Card.displayName = "Card";