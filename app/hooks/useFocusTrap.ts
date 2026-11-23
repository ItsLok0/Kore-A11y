import React, { useEffect } from "react";

export const useFocusTrap = (ref: React.RefObject<HTMLDivElement | null>, isActive: boolean) => {
  useEffect(() => {
    if (!isActive || !ref.current) return;
 
    const container = ref.current;
 
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
 
      // On ignore les éléments inatteignables (sous un ancêtre `inert` ou `hidden`) :
      // s'ils comptaient comme « premier » ou « dernier », `focus()` serait sans effet
      // et Tab sortirait du piège.
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.closest('[inert], [hidden]'));
 
      if (!focusable.length) { e.preventDefault(); return; }
 
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
 
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
 
    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [isActive, ref]);
};