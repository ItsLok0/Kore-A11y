'use client';

import { useCallback } from 'react';

/**
 * Force les assistives technologies à détecter un changement même si le texte est identique.
 * 
 * Utilisé par : StatusIndicator
 */

export function useAnnouncer() {
  const announce = useCallback((text: string, assertive = false) => {
    const id = assertive ? 'announcer-assertive' : 'announcer';
    // eslint-disable-next-line no-undef
    const region = document.getElementById(id);
    if (!region) return;
    region.textContent = '';
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      region.textContent = text;
    }, 50);
  }, []);

  return { announce };
}