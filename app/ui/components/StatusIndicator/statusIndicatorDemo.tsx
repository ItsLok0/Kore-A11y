'use client';

import { useState } from 'react';
import { StatusIndicator, type StatusVariant } from '@/app/ui/components/StatusIndicator/statusIndicator';
import { Button } from '@/app/ui/components/Button/button';
import { Text } from '@/app/ui/components/text';

const cycle: StatusVariant[] = ['neutral', 'loading', 'success', 'danger', 'warning', 'info'];

// Cycle de statuts

export function StatusCycleDemo() {
  const [index, setIndex] = useState(0);
  const current = cycle[index];

  return (
    <div className="flex flex-col gap-6">
      <StatusIndicator status={current} label={`Statut actuel : ${current}`} />
      <div className="flex flex-wrap gap-3">
        {cycle.map((variant, i) => (
          <Button
            key={variant}
            variant={index === i ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setIndex(i)}
          >
            {variant}
          </Button>
        ))}
      </div>
      <Text variant="small" className="text-text-muted">
        Le lecteur d'écran annonce le changement via{' '}
        <Text as="span" variant="code">aria-live="polite"</Text> à chaque clic.
      </Text>
    </div>
  );
}

// Cycle de sauvegarde automatique

export function AutoSaveDemo() {
  const [status, setStatus] = useState<StatusVariant>('neutral');
  const [label, setLabel] = useState('Modifications non sauvegardées');
  const [running, setRunning] = useState(false);

  const simulate = () => {
    if (running) return;
    setRunning(true);
    setStatus('loading');
    setLabel('Sauvegarde en cours...');

    // eslint-disable-next-line no-undef
    setTimeout(() => {
      const success = Math.random() > 0.3;
      setStatus(success ? 'success' : 'danger');
      setLabel(success ? 'Sauvegardé avec succès' : 'Échec de la sauvegarde');
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        setStatus('neutral');
        setLabel('Modifications non sauvegardées');
        setRunning(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-lg border border-border-subtle bg-bg-surface p-4">
        <StatusIndicator status={status} label={label} />
        <Button
          variant="outline"
          size="sm"
          onClick={simulate}
          isLoading={running}
          aria-label="Simuler une sauvegarde automatique"
        >
          Simuler
        </Button>
      </div>
      <Text variant="small" className="text-text-muted">
        Cycle : <Text as="span" variant="code">neutral</Text> →{' '}
        <Text as="span" variant="code">loading</Text> →{' '}
        <Text as="span" variant="code">success</Text> ou{' '}
        <Text as="span" variant="code">danger</Text> → retour <Text as="span" variant="code">neutral</Text>
      </Text>
    </div>
  );
}

// Statut de connexion

export function ConnectionDemo() {
  const [status, setStatus] = useState<StatusVariant>('success');
  const [label, setLabel] = useState('Connecté');

  const toggle = () => {
    if (status === 'success') {
      setStatus('loading');
      setLabel('Reconnexion...');
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        setStatus('danger');
        setLabel('Connexion perdue');
      }, 1500);
    } else if (status === 'danger') {
      setStatus('loading');
      setLabel('Reconnexion...');
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        setStatus('success');
        setLabel('Connecté');
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-lg border border-border-subtle bg-bg-surface p-4">
        <StatusIndicator
          status={status}
          label={label}
          critical={status === 'danger'}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={toggle}
          isLoading={status === 'loading'}
          aria-label={`Simuler un changement de connexion - ${status === 'success' ? 'déconnecter' : 'reconnecter'}`}
        >
          {status === 'success' ? 'Déconnecter' : 'Reconnecter'}
        </Button>
      </div>
      <Text variant="small" className="text-text-muted">
        La perte de connexion utilise{' '}
        <Text as="span" variant="code">critical=true</Text> →{' '}
        <Text as="span" variant="code">aria-live="assertive"</Text> pour interrompre
        immédiatement le lecteur d'écran.
      </Text>
    </div>
  );
}

// Validation progressive

export function ValidationDemo() {
  const steps: { status: StatusVariant; label: string }[] = [
    { status: 'neutral', label: 'En attente de validation' },
    { status: 'loading', label: 'Vérification en cours...' },
    { status: 'warning', label: 'Vérification partielle' },
    { status: 'success', label: 'Validation réussie' },
  ];

  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const current = steps[step];

  const start = () => {
    if (running) return;
    setRunning(true);
    setStep(0);

    steps.forEach((_, i) => {
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        setStep(i);
        if (i === steps.length - 1) setRunning(false);
      }, i * 1500);
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-lg border border-border-subtle bg-bg-surface p-4">
        <StatusIndicator status={current.status} label={current.label} />
        <Button
          variant="outline"
          size="sm"
          onClick={start}
          isLoading={running}
          aria-label="Lancer la simulation de validation"
        >
          Lancer
        </Button>
      </div>
      <Text variant="small" className="text-text-muted">
        Cycle automatique en 4 étapes, chaque changement est annoncé
        aux AT via <Text as="span" variant="code">useAnnouncer</Text>.
      </Text>
    </div>
  );
}