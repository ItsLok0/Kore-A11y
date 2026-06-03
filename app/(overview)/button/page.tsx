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
  faExternalLink,
  faHouse,
  faBookOpen,
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
        <Heading as="h1">Button & ButtonLink</Heading>
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
            <ButtonLink href="#" variant="link">Link</ButtonLink>
          </div>
        </section>

        {/* ── SECTION 2 : TAILLES ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Tailles</Heading>
            <Text variant="small">
              3 tailles disponibles via la prop <Text as="span" variant="code">size</Text>.
              La taille <Text as="span" variant="code">md</Text> est celle par défaut.
              Applicable sur <Text as="span" variant="code">Button</Text> et{' '}
              <Text as="span" variant="code">ButtonLink</Text>.
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

        {/* ── SECTION 6 : BUTTONLINK ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>ButtonLink</Heading>
            <Text variant="small">
              Composant de navigation sémantique. Rend un{' '}
              <Text as="span" variant="code">&lt;a&gt;</Text> via{' '}
              <Text as="span" variant="code">next/link</Text> avec les mêmes
              styles que <Text as="span" variant="code">Button</Text>,
              jamais un <Text as="span" variant="code">&lt;button&gt;</Text>
              pour naviguer.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* Variants */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Variants disponibles
              </Text>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#" variant="primary">Primary</ButtonLink>
                <ButtonLink href="#" variant="outline">Outline</ButtonLink>
                <ButtonLink href="#" variant="ghost">Ghost</ButtonLink>
                <ButtonLink href="#" variant="link">Link</ButtonLink>
              </div>
              <Text variant="small" className="text-text-muted">
                Tous les variants de <Text as="span" variant="code">Button</Text>{' '}
                sont disponibles sur <Text as="span" variant="code">ButtonLink</Text>.
              </Text>
            </div>

            {/* Navigation interne */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Navigation interne
              </Text>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/" variant="outline" size="md">
                  <FontAwesomeIcon icon={faHouse} aria-hidden="true" />
                  Accueil
                </ButtonLink>
                <ButtonLink href="/typography" variant="ghost" size="md">
                  <FontAwesomeIcon icon={faBookOpen} aria-hidden="true" />
                  Typographie
                </ButtonLink>
              </div>
              <Text variant="small" className="text-text-muted">
                Navigation interne via <Text as="span" variant="code">next/link</Text>,
                prefetch automatique, pas de rechargement de page.
              </Text>
            </div>

            {/* Navigation externe */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Navigation externe — <Text as="span" variant="code">external</Text>
              </Text>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href="https://github.com/ItsLok0/kore-a11y"
                  variant="primary"
                  external
                >
                  <FontAwesomeIcon icon={faExternalLink} aria-hidden="true" />
                  Voir sur GitHub
                </ButtonLink>
                <ButtonLink
                  href="https://www.w3.org/WAI/WCAG22/quickref"
                  variant="outline"
                  external
                >
                  WCAG 2.2
                </ButtonLink>
              </div>
              <Text variant="small" className="text-text-muted">
                <Text as="span" variant="code">external</Text> ajoute{' '}
                <Text as="span" variant="code">target="_blank"</Text> +{' '}
                <Text as="span" variant="code">rel="noopener noreferrer"</Text> +
                un <Text as="span" variant="code">sr-only</Text> annoncant
                l'ouverture dans un nouvel onglet.
              </Text>
            </div>

            {/* Tailles */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Tailles
              </Text>
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href="#" variant="outline" size="sm">
                  Small
                </ButtonLink>
                <ButtonLink href="#" variant="outline" size="md">
                  Medium
                </ButtonLink>
                <ButtonLink href="#" variant="outline" size="lg">
                  Large
                </ButtonLink>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 7 : BUTTON VS BUTTONLINK ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Button vs ButtonLink</Heading>
            <Text variant="small">
              La règle sémantique fondamentale, une action déclenche un{' '}
              <Text as="span" variant="code">&lt;button&gt;</Text>, une navigation
              déclenche un <Text as="span" variant="code">&lt;a&gt;</Text>.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-success">
                ✓ Button / Actions
              </Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Enregistrer</Button>
                <Button variant="danger" iconLeft={faTrash}>Supprimer</Button>
                <Button variant="outline">Annuler</Button>
              </div>
              <Text variant="small" className="text-text-muted">
                Soumettre un formulaire, ouvrir une modale, déclencher
                une action (toujours un <Text as="span" variant="code">&lt;button&gt;</Text>).
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-success">
                ✓ ButtonLink / Navigation
              </Text>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#" variant="primary" iconRight={faArrowRight}>
                  Commencer
                </ButtonLink>
                <ButtonLink href="#" variant="link">
                  En savoir plus
                </ButtonLink>
              </div>
              <Text variant="small" className="text-text-muted">
                Changer de page, lien externe, ancre  (toujours un{' '})
                <Text as="span" variant="code">&lt;a&gt;</Text>. Les lecteurs
                d'écran distinguent "bouton" et "lien" dans leur navigation.
              </Text>
            </div>

          </div>
        </section>

        {/* ── CAS D'USAGE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Cas d'usage</Heading>
            <Text variant="small">
              Exemples d'assemblages courants dans des interfaces réelles.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Actions de formulaire
              </Text>
              <div className="flex gap-3">
                <Button variant="primary">Enregistrer</Button>
                <Button variant="ghost">Annuler</Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Confirmation dangereuse
              </Text>
              <div className="flex gap-3">
                <Button variant="danger" iconLeft={faTrash}>Supprimer</Button>
                <Button variant="outline">Annuler</Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Appel à l'action
              </Text>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href="https://github.com/ItsLok0/kore-a11y"
                  variant="primary"
                  size="md"
                  external
                  iconRight={faArrowRight}
                >
                  Voir sur GitHub
                </ButtonLink>
                <ButtonLink href="/" variant="outline" size="md" iconOnly={faHouse} ariaLabel="Accueil"/>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Actions compactes
              </Text>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Filtrer</Button>
                <Button variant="outline" size="sm">Exporter</Button>
                <Button variant="ghost" size="sm" iconLeft={faPlus}>
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
                Chaque bouton et lien affiche un double anneau de focus via{' '}
                <Text as="span" variant="code">--focus-ring</Text> sur{' '}
                <Text as="span" variant="code">focus-visible</Text>. Testable à la touche Tab.
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
                compréhensible hors contexte visuel.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Liens externes</Text>
              <Text variant="small">
                La prop <Text as="span" variant="code">external</Text> ajoute automatiquement
                un <Text as="span" variant="code">sr-only</Text> annonçant l'ouverture
                dans un nouvel onglet, évitant toute surprise de navigation.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}