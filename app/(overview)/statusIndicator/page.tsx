import { StatusIndicator } from '@/app/ui/components/StatusIndicator/statusIndicator';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import {
  StatusCycleDemo,
  AutoSaveDemo,
  ConnectionDemo,
  ValidationDemo,
} from '@/app/ui/components/StatusIndicator/statusIndicatorDemo';
import type { Metadata } from 'next';
import { Button } from '@/app/ui/components/Button/button';
import { Badge } from '@/app/ui/components/badge';

export const metadata: Metadata = {
  title: 'Composant StatusIndicator',
  description: 'Démonstration du composant StatusIndicator : annonces dynamiques accessibles via aria-live.',
};

export default function StatusIndicatorPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">StatusIndicator</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Annonces dynamiques accessibles
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* ── SECTION 1 : VARIANTS ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Variants</Heading>
            <Text variant="small">
              6 variants couvrant tous les états sémantiques. Chaque variant
              combine icône et label — jamais la couleur seule —
              conformément au <Text as="span" variant="code">RGAA 3.1</Text>.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <StatusIndicator status="success" label="Succès" />
            <StatusIndicator status="danger" label="Erreur" />
            <StatusIndicator status="warning" label="Avertissement" />
            <StatusIndicator status="info" label="Information" />
            <StatusIndicator status="neutral" label="Neutre" />
            <StatusIndicator status="loading" label="Chargement en cours" />
          </div>
        </section>

        {/* ── SECTION 2 : LABEL VISIBLE VS SR-ONLY ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Label visible vs masqué</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">srOnly</Text> masque le label
              visuellement tout en le conservant dans le DOM pour les
              lecteurs d'écran.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Label visible (défaut)
              </Text>
              <div className="flex flex-wrap gap-4">
                <StatusIndicator status="success" label="Sauvegardé"   />
                <StatusIndicator status="loading" label="Chargement..." />
                <StatusIndicator status="danger"  label="Erreur réseau" />
              </div>
              <Text variant="small" className="text-text-muted">
                Icône + texte visibles. Idéal pour les espaces avec
                assez de place.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Label sr-only — <Text as="span" variant="code">srOnly</Text>
              </Text>
              <div className="flex flex-wrap gap-4">
                <StatusIndicator status="success" label="Sauvegardé"    srOnly />
                <StatusIndicator status="loading" label="Chargement..."  srOnly />
                <StatusIndicator status="danger"  label="Erreur réseau"  srOnly />
              </div>
              <Text variant="small" className="text-text-muted">
                Icône seule visuellement. Le label reste annoncé
                aux AT. Utile dans les interfaces compactes.
              </Text>
            </div>

          </div>
        </section>

        {/* ── SECTION 3 : SIMULATEUR ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Changement d'état</Heading>
            <Text variant="small">
              Chaque changement de <Text as="span" variant="code">status</Text> déclenche
              une annonce via <Text as="span" variant="code">useAnnouncer</Text>. Testez
              avec un lecteur d'écran actif.
            </Text>
          </div>
          <div className="rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <StatusCycleDemo />
          </div>
        </section>

        {/* ── SECTION 4 : CAS D'USAGE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Cas d'usage</Heading>
            <Text variant="small">
              Scénarios concrets d'intégration dans une interface réelle.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Sauvegarde automatique
              </Text>
              <AutoSaveDemo />
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Statut de connexion
              </Text>
              <ConnectionDemo />
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:col-span-2">
              <Text variant="caption" className="font-bold text-text-muted">
                Validation progressive
              </Text>
              <ValidationDemo />
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
                <Text variant="caption" className="font-bold text-text-muted">
                    Avec un bouton
                </Text>
                <div className="flex items-center justify-between gap-4">
                    <Button variant="primary" disabled>
                        Publier
                    </Button>
                    <StatusIndicator status="warning" label="Modifications non sauvegardées" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <Button variant="primary">
                        Publier
                    </Button>
                    <StatusIndicator status="success" label="Prêt à publier" />
                </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
                <Text variant="caption" className="font-bold text-text-muted">
                    Avec un Badge
                </Text>
                <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="danger">Echec</Badge>
                    <StatusIndicator status="danger" label="Mise à jour échouée" />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="success">Stable</Badge>
                    <StatusIndicator status="success" label="Dernière version installée" />
                </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:col-span-2">
                <Text variant="caption" className="font-bold text-text-muted">
                    Interface compacte — <Text as="span" variant="code">srOnly</Text> en contexte réel
                </Text>
                <Text variant="small" className="text-text-muted">
                    Quand l'espace est limité, le label est masqué visuellement.
                    Les AT lisent toujours l'information complète.
                </Text>
                <div className="flex items-center gap-6 rounded-lg border border-border-subtle p-4">
                    <div className="flex flex-1 flex-col gap-1">
                        <Text variant="small" className="font-medium">document.pdf</Text>
                        <Text variant="caption" className="text-text-muted">2.4 MB</Text>
                    </div>
                    <StatusIndicator status="success" label="Fichier téléchargé avec succès" srOnly />
                </div>
            </div>

          </div>
        </section>

        {/* ── A11Y ── */}
        <section className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8">
          <Heading as="h2" level={4} className="mb-4 italic text-primary">
            Note accessibilité
          </Heading>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Région live montée au premier rendu
              </Text>
              <Text variant="small">
                La zone <Text as="span" variant="code">aria-live</Text> est dans le DOM
                dès le montage du composant. Les AT qui ne détectent pas
                les régions ajoutées dynamiquement sont ainsi supportés.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                polite vs assertive
              </Text>
              <Text variant="small">
                <Text as="span" variant="code">polite</Text> attend la fin de la
                lecture en cours. <Text as="span" variant="code">assertive</Text>{' '}
                (via <Text as="span" variant="code">critical</Text>) interrompt
                immédiatement (réservé aux erreurs critiques).
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                useAnnouncer — double setState
              </Text>
              <Text variant="small">
                Le hook vide le message avant de le remettre avec un délai
                de 50ms. Ce pattern force les AT à détecter le changement
                même si le texte est identique au précédent.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Couleur non exclusive
              </Text>
              <Text variant="small">
                Chaque variant combine icône et label. L'information
                reste lisible sans perception des couleurs, pour les
                utilisateurs daltoniens ou en contraste réduit.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}