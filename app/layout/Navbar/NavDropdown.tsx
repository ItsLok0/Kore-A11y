'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NavItem } from './nav-data';
import { ButtonLink } from '@/app/ui/components/Button/buttonlink';
import { cn } from '@/lib/utils';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface NavDropdownProps {
  item: NavItem;
  onClickLink?: () => void;
}

export function NavDropdown({ item, onClickLink }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      // Ignore le clic sur le bouton lui-même : son onClick gère déjà le toggle
      if (buttonRef.current?.contains(event.target as Node)) return;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const menuId = `dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
  const isChildActive = item.children?.some((child) => pathname === child.href);
  const underline = "after:absolute after:left-2 after:right-2 after:bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full";
  const hoverUnderline = `${underline} after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100`;

  return (
    <div
      ref={dropdownRef}
      className="relative w-fit md:w-auto"
      onBlurCapture={(e) => {
        if (
          e.relatedTarget !== null &&
          !dropdownRef.current?.contains(e.relatedTarget as Node)
        ) {
          setIsOpen(false);
        }
      }}
    >
      <ButtonLink
        ref={buttonRef}
        href='#'
        type="button"
        variant='link'
        aria-expanded={isOpen}
        aria-controls={menuId}
        iconRight={faChevronDown}
        onClick={() => {
            setIsOpen((prev) => !prev);
            
        }}
        className={cn(
            "block text-lg md:text-sm font-medium p-2 no-underline hover:no-underline focus:no-underline",
            isChildActive
                ? `relative text-primary ${underline}`
                : `text-text-secondary hover:text-text-primary ${hoverUnderline}`,
            "[&_svg]:motion-safe:transition-transform [&_svg]:motion-safe:duration-200",
            isOpen && "[&_svg]:rotate-180",  
        )}
      >
        {item.label}
      </ButtonLink>

      <ul
        id={menuId}
        inert={!isOpen}
        className={cn(
            "md:absolute md:left-0 md:top-full md:mt-1 md:w-48 md:bg-bg-surface md:shadow-md md:rounded-md md:border md:border-(--color-border-subtle) p-2 flex flex-col gap-2",
            isOpen ? "flex" : "hidden"
        )}
      >
        {item.children?.map((child) => {
            const isActive = pathname === child.href;
            return (
                <li key={child.href}>
                <ButtonLink
                    href={child.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => {
                        setIsOpen(false);
                        onClickLink?.();
                    }}
                    className={cn(
                    "block text-lg md:text-sm font-medium p-2 no-underline hover:no-underline focus:no-underline",
                    isActive
                        ? `relative text-primary bg-primary-subtle ${underline}`
                        : `text-text-secondary hover:text-text-primary ${hoverUnderline} hover:bg-ghost-hover`
                    )}
                >
                    {child.label}
                </ButtonLink>
                </li>
            );
        })}
      </ul>
    </div>
  );
}