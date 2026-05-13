'use client';

import { Button } from '@/app/ui/components/Button/button';
import { Text } from '@/app/ui/components/text';
import { useState } from 'react';

export function ButtonLoadingDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    /* global setTimeout */
    setTimeout(() => setIsLoading(false), 2500);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
      <Text variant="caption" className="font-bold text-text-muted">
        Chargement — <Text variant="code">isLoading</Text>
      </Text>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="primary"
          isLoading={isLoading}
          onClick={simulateLoading}
        >
          {isLoading ? 'Chargement...' : 'Simuler un chargement'}
        </Button>
        <Button variant="outline" isLoading>
          En cours...
        </Button>
      </div>
      <Text variant="small" className="text-text-muted">
        <Text variant="code">aria-busy="true"</Text> est ajouté automatiquement.
        Le bouton est désactivé pendant le chargement pour éviter les doubles soumissions.
      </Text>
    </div>
  );
}