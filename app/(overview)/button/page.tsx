import type { Metadata } from 'next';
import { Button } from "@/app/ui/components/Button/button";
import { Heading } from "@/app/ui/components/heading";
import { Text } from "@/app/ui/components/text";
import { ButtonLink } from "@/app/ui/components/Button/buttonlink";
import {
  faTrash,
  faPaperPlane,
  faPlus,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonLoadingDemo } from "@/app/ui/components/Button/buttonLoadingDemo";

export const metadata: Metadata = {
  title: 'Composant Button',
  description: 'Démonstration du composant Button : variants, tailles, états et accessibilité.',
};

export default function ButtonDemoPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Button</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Boutons accessibles & sémantiques
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* ── SECTION 1 : VARIANTS ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Variants</Heading>
            <Text variant="small">
              7 variants couvrant tous les contextes sémantiques de l'interface.
              Chaque variant possède ses propres états <Text as="span" variant="code">hover</Text>,{' '}
              <Text as="span" variant="code">active</Text> et <Text as="span" variant="code">focus</Text>.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* ── SECTION 2 : TAILLES ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Tailles</Heading>
            <Text variant="small">
              3 tailles disponibles via la prop <Text as="span" variant="code">size</Text>.
              La taille <Text as="span" variant="code">md</Text> est celle par défaut.
            </Text>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* ── SECTION 3 : AVEC ICÔNES ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Avec icônes</Heading>
            <Text variant="small">
              Les icônes renforcent la lisibilité. Elles sont toujours accompagnées
              d'un texte visible ou d'un <Text as="span" variant="code">aria-label</Text> explicite.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Button variant="primary" iconLeft={faPaperPlane}>
              Envoyer
            </Button>
            <Button variant="success" iconLeft={faPlus}>
              Ajouter
            </Button>
            <Button variant="danger" iconLeft={faTrash}>
              Supprimer
            </Button>
            <Button variant="outline" iconRight={faArrowRight}>
              Suivant
            </Button>
            {/* Icône seule — aria-label obligatoire */}
            <Button variant="ghost" aria-label="Supprimer l'élément" iconOnly={faTrash} />
          </div>
        </section>

        {/* ── SECTION 4 : ÉTATS ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>États</Heading>
            <Text variant="small">
              Les états <Text as="span" variant="code">disabled</Text> et{' '}
              <Text as="span" variant="code">isLoading</Text> bloquent l'interaction et
              communiquent l'état aux technologies d'assistance via{' '}
              <Text as="span" variant="code">aria-busy</Text>.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* Disabled */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Désactivé — <Text as="span" variant="code">disabled</Text>
              </Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" disabled>Primary</Button>
                <Button variant="secondary" disabled>Secondary</Button>
                <Button variant="danger" disabled>Danger</Button>
                <Button variant="outline" disabled>Outline</Button>
              </div>
              <Text variant="small" className="text-text-muted">
                L'attribut natif <Text as="span" variant="code">disabled</Text> est appliqué
                directement sur le <Text as="span" variant="code">&lt;button&gt;</Text>,
                le rendant inatteignable au clavier et à la souris.
              </Text>
            </div>

            {/* Loading */}
            <ButtonLoadingDemo />

          </div>
        </section>

        {/* ── SECTION 5 : FULL WIDTH ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Pleine largeur</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">fullWidth</Text> étend le bouton
              à 100% de son conteneur. Utile pour les formulaires mobiles.
            </Text>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Button variant="primary" fullWidth>Connexion</Button>
            <Button variant="outline" fullWidth>Créer un compte</Button>
            <Button variant="secondary" fullWidth>Annuler</Button>
          </div>
        </section>

        {/* ── SECTION 6 : CAS D'USAGE RÉELS ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Cas d'usage</Heading>
            <Text variant="small">
              Exemples d'assemblages courants dans des interfaces réelles.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* Formulaire */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Actions de formulaire
              </Text>
              <div className="flex gap-3">
                <Button variant="primary">Enregistrer</Button>
                <Button variant="ghost">Annuler</Button>
              </div>
            </div>

            {/* Confirmation dangereuse */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Confirmation dangereuse
              </Text>
              <div className="flex gap-3">
                <Button variant="danger" iconRight={faTrash}>
                  Supprimer
                </Button>
                <Button variant="outline">Annuler</Button>
              </div>
            </div>

            {/* Appel à l'action */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Appel à l'action
              </Text>
              <div className="flex flex-wrap gap-3">

                {/* Navigation externe */}
                <ButtonLink href="https://github.com/ItsLok0/kore-a11y" variant="primary" size="md" external>
                    Voir sur GitHub
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                </ButtonLink>

                {/* Navigation interne */}
                <ButtonLink href="/" variant="link" size="md">
                    Accueil
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>

            {/* Taille réduite */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Actions compactes
              </Text>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Filtrer</Button>
                <Button variant="outline" size="sm">Exporter</Button>
                <Button variant="ghost" size="sm">
                  <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
                  Ajouter
                </Button>
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
              <Text className="text-sm font-bold underline">Focus visible</Text>
              <Text variant="small">
                Chaque bouton affiche un double anneau de focus via{' '}
                <Text as="span" variant="code">--focus-ring</Text> sur{' '}
                <Text as="span" variant="code">focus-visible</Text>, conforme au critère
                RGAA 10.5. Testable à la touche Tab.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">États communiqués</Text>
              <Text variant="small">
                <Text as="span" variant="code">disabled</Text> bloque nativement le focus.{' '}
                <Text as="span" variant="code">aria-busy</Text> annonce le chargement aux
                lecteurs d'écran sans retirer le focus de l'élément.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Icône seule</Text>
              <Text variant="small">
                Un bouton sans texte visible exige un{' '}
                <Text as="span" variant="code">aria-label</Text> explicite pour être
                compréhensible hors contexte visuel — conforme RGAA 11.9.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Contraste</Text>
              <Text variant="small">
                Tous les variants respectent un ratio minimum de 4.5:1 sur fond
                blanc et sur <Text as="span" variant="code">--color-bg-page</Text>,
                certifié WCAG AA.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}