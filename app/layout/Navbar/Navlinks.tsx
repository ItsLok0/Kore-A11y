"use client";

import { usePathname } from "next/navigation";
import { LINKS } from "./nav-data";
import { NavDropdown } from "./NavDropdown";
import { ButtonLink } from "@/app/ui/components/Button/buttonlink";
import { cn } from "@/lib/utils";

interface NavLinksProps {
    onClickLink?: () => void;
}

export function NavLinks({ onClickLink }: NavLinksProps) {
    const pathname = usePathname();
    const underline = "after:absolute after:left-2 after:right-2 after:bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full";
    const hoverUnderline = `${underline} after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100`;

    return (
        <ul
            className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto"
            aria-label="Navigation principale"
        >
            {LINKS.map((item) => {
                // Cas 1 : C'est un sous-menu
                if (item.children) {
                    return (
                        <li key={item.label} className="w-fit md:w-auto">
                            <NavDropdown item={item} onClickLink={onClickLink} />
                        </li>
                    );
                }

                // Cas 2 : C'est un lien simple
                const isActive = pathname === item.href;
                return (
                    <li key={item.href} className="w-fit md:w-auto">
                        <ButtonLink
                            href={item.href!}
                            aria-current={isActive ? "page" : undefined}
                            onClick={onClickLink}
                            className={cn(
                                "block text-lg md:text-sm font-medium p-2 no-underline hover:no-underline focus:no-underline",
                                isActive
                                    ? `relative text-primary ${underline}`
                                    : `text-text-secondary hover:text-text-primary ${hoverUnderline}`
                            )}
                        >
                            {item.label}
                        </ButtonLink>
                    </li>
                );
            })}
        </ul>
    );
}