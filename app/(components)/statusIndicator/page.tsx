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
import { A11yReference } from '../_components/A11yReference';

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
              combine icône et label, jamais la couleur seule.
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
                <StatusIndicator status="success" label="Sauvegardé" />
                <StatusIndicator status="loading" label="Chargement..." />
                <StatusIndicator status="danger" label="Erreur réseau" />
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
                <StatusIndicator status="success" label="Sauvegardé" srOnly />
                <StatusIndicator status="loading" label="Chargement..." srOnly />
                <StatusIndicator status="danger" label="Erreur réseau" srOnly />
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
        <A11yReference
          keyboard={[
            { keys: "Aucune", action: "Le StatusIndicator n'est pas interactif : il n'est pas dans l'ordre de tabulation et n'a aucune touche propre. L'annonce n'est pas liée au focus." },
          ]}
          aria={[
            { name: "Aucun rôle sur le composant", description: "Le `span` n'a ni rôle ni `aria-label` : le label (visible, ou `sr-only` avec la prop `srOnly`) est son contenu. Couvert par des tests." },
            { name: "aria-hidden sur l'icône", description: "L'icône est décorative : elle est masquée aux lecteurs d'écran. Couvert par un test." },
            { name: "Régions live globales", description: "Deux zones `sr-only` dans `app/layout.tsx` : `#announcer` (`role=\"status\"`, `aria-live=\"polite\"`) et `#announcer-assertive` (`role=\"alert\"`, `aria-live=\"assertive\"`), toutes deux `aria-atomic`. Elles sont dans la page dès le chargement, vides (mesuré dans Chromium)." },
            { name: "useAnnouncer", description: "Écrit le label dans la région : il la vide, puis remet le texte 50 ms plus tard (manipulation directe de `textContent`, sans état React). Le texte est ainsi détecté même s'il est identique au précédent. Mesuré : « Statut actuel : success » apparaît dans la région polie après un clic. Couvert par un test." },
            { name: "critical", description: "Avec `critical`, l'annonce va dans la région `assertive` et interrompt la lecture. Mesuré : « Connexion perdue » apparaît dans `#announcer-assertive`. Couvert par un test." },
            { name: "Pas d'annonce au montage", description: "Un indicateur qui apparaît avec la page n'est pas annoncé : seules les mises à jour le sont (mesuré : les deux régions sont vides au chargement). Couvert par un test." },
          ]}
          wcag={[
            { criterion: "4.1.3 Messages d'état", level: "AA", how: "Les changements d'état sont annoncés par des régions live, sans déplacer le focus." },
            { criterion: "1.4.1 Utilisation de la couleur", level: "A", how: "Chaque variante associe une icône et un label : la couleur ne porte pas l'information seule." },
            { criterion: "1.4.3 Contraste (minimum)", level: "AA", how: "Le label atteint 16,12 sur le fond de la page (mesuré dans Chromium, couleurs affichées)." },
            { criterion: "1.4.11 Contraste des éléments non textuels", level: "AA", how: "Icônes : 6,98 (success), 5,88 (danger), 4,56 (warning), 5,39 (info), 4,39 (neutral), 9,03 (loading), tous au-dessus de 3. Calculé sur le fond de la page, approximatif pour les cartes translucides." },
            { criterion: "2.3.3 Animation à partir d'interactions", level: "AAA", how: "Le spinner utilise `motion-safe:animate-spin` : il ne tourne pas si l'utilisateur réduit les animations." },
          ]}
          limits={[
            "Les régions live sont dans `app/layout.tsx`, pas dans le composant. Sans `#announcer` dans la page, `useAnnouncer` ne fait rien et ne signale aucune erreur : le composant ne parle pas en dehors de ce layout.",
            "Les deux régions sont uniques et partagées : deux StatusIndicator qui changent en même temps s'écrasent, seule la dernière annonce est lue (déduit du code, non mesuré).",
            "Le label reste aussi dans le DOM : une personne qui lit la page puis reçoit l'annonce peut l'entendre deux fois. Non testé avec un lecteur d'écran.",
            "L'annonce est déclenchée à chaque changement de `status`, de `label` ou de `critical`, même si l'indicateur est hors écran ou masqué.",
            "Les régions live se comportent différemment selon le couple navigateur + lecteur d'écran. Test manuel (NVDA, VoiceOver) : à faire.",
          ]}
        />

      </div>
    </div>
  );
}