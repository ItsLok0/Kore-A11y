'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { NavLinks } from './Navlinks';
import { useFocusTrap } from '@/app/hooks/useFocusTrap';
import Link from 'next/link';
import { Button } from '@/app/ui/components/Button/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const burgerBtnRef = useRef<HTMLButtonElement>(null);
  const mobileTrapRef = useRef<HTMLDivElement>(null);

  // Focus trap actif uniquement quand le menu mobile est ouvert
  useFocusTrap(mobileTrapRef, isOpen);

  // Focus initial dans le menu à l'ouverture
  useEffect(() => {
    if (isOpen) {
      const firstFocusable = mobileTrapRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      firstFocusable?.focus();
    }
  }, [isOpen]);

  // Gestion du Scroll Lock & Touche Échap
  useEffect(() => {
    if (!isOpen) return;

    document.documentElement.style.overflowY = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        burgerBtnRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.documentElement.style.overflowY = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    burgerBtnRef.current?.focus();
  };

  return (
    <div className="px-8 h-16 flex items-center justify-between xl:justify-around bg-bg-surface py-5">
      {/* Logo / Home link */}
      <Link tabIndex={0} href="/" className="font-medium text-xl p-2 text-text-primary outline-hidden focus-visible:shadow-(--focus-ring) rounded-md">
        Kore A11Y
      </Link>

      {/* Navigation Desktop */}
      <nav aria-label="Navigation principale" className="hidden md:block">
        <NavLinks />
      </nav>

      <div
        ref={mobileTrapRef}
      >
        {/* Bouton Burger Mobile */}
        <Button
            ref={burgerBtnRef}
            variant='link'
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            onClick={toggleMenu}
            className="w-9 h-9 flex items-center justify-center md:hidden text-text-secondary hover:bg-ghost-hover relative z-50 outline-hidden focus-visible:shadow-(--focus-ring) rounded-md"
        >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
            </svg>
        </Button>

        {/* Menu Mobile avec animation respectant Reduced Motion */}
        <div
            id="mobile-menu"
            inert={!isOpen}
            className={cn(
                "fixed inset-0 bg-bg-surface border border-(--color-border-subtle) z-40 py-24 px-6 md:hidden",
                "transition-transform duration-300 ease-in-out motion-reduce:transition-none",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}
            aria-hidden={!isOpen}
        >
            <nav aria-label="Navigation principale mobile" className='h-full'>
                <NavLinks onClickLink={closeMenu} />
            </nav>
        </div>
      </div>
    </div>
  );
}