import type { Metadata } from 'next';
import { Heading } from "@/app/ui/components/heading";
import { Text } from "@/app/ui/components/text";
import { Button } from "@/app/ui/components/Button/button";
import { Card } from "@/app/ui/components/Card/interactiveCard";
import {
  faStar,
  faBookmark,
  faArrowRight,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Composant Card',
  description: 'Démonstration du composant Card : Redundant Click, actions secondaires et accessibilité.',
};

export default function CardDemoPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Card</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Cartes accessibles & sémantiques
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* ── SECTION 1 : CARD STATIQUE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Card statique</Heading>
            <Text variant="small">
              Sans prop <Text as="span" variant="code">href</Text>, la carte est purement
              informative. Aucun élément interactif, le titre est un simple texte.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Card
              title="Titre de la carte"
              className="w-72 rounded-lg border border-border-subtle bg-bg-surface p-5"
            >
              <Text variant="small" className="text-text-secondary">
                Cette carte ne contient aucun lien. Elle est purement informative
                et n'est pas atteignable à la touche Tab.
              </Text>
            </Card>
          </div>
        </section>

        {/* ── SECTION 2 : CARD AVEC LIEN (REDUNDANT CLICK) ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Card interactive — Redundant Click</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">href</Text> active le pattern
              "Redundant Click Target" : le pseudo-élément{' '}
              <Text as="span" variant="code">::after</Text> du lien de titre s'étend
              sur toute la carte via <Text as="span" variant="code">after:absolute after:inset-0</Text>.
              Un seul élément est focusable à la touche Tab, le titre.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Card
              title="Introduction à l'accessibilité"
              href="/accessibilite"
              className="w-72 rounded-lg border border-border-subtle bg-bg-surface p-5 transition-shadow duration-200 hover:shadow-md"
            >
              <Text variant="small" className="text-text-secondary">
                Toute la surface de la carte est cliquable. Seul le titre
                est annoncé comme lien par les lecteurs d'écran.
              </Text>
            </Card>
            <Card
              title="Guide RGAA 4.1"
              href="/rgaa"
              className="w-72 rounded-lg border border-border-subtle bg-bg-surface p-5 transition-shadow duration-200 hover:shadow-md"
            >
              <Text variant="small" className="text-text-secondary">
                Le focus clavier sur le titre déclenche l'affichage du focus
                ring sur la carte entière via{' '}
                <Text as="span" variant="code">has-[a:focus-visible]</Text>.
              </Text>
            </Card>
          </div>
        </section>

        {/* ── SECTION 3 : CARD AVEC ACTIONS SECONDAIRES ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Actions secondaires</Heading>
            <Text variant="small">
              Les actions secondaires (ex : "Ajouter aux favoris") utilisent{' '}
              <Text as="span" variant="code">relative z-1</Text> pour passer
              au-dessus du pseudo-élément <Text as="span" variant="code">::after</Text>{' '}
              du lien principal. Chaque action est indépendante au clavier et à la souris.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">

            {/* Card avec bouton favoris */}
            <Card
              title="Bonnes pratiques WCAG 2.2"
              href="/wcag"
              className="w-72 rounded-lg border border-border-subtle bg-bg-surface p-5 transition-shadow duration-200 hover:shadow-md"
            >
              <Text variant="small" className="text-text-secondary">
                Critères de succès pour le niveau AA et AAA.
              </Text>
              <div className="relative z-1 mt-4 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Ajouter aux favoris"
                  iconOnly={faStar}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Sauvegarder"
                  iconOnly={faBookmark}
                />
              </div>
            </Card>

            {/* Card avec bouton danger */}
            <Card
              title="Rapport d'audit automatisé"
              href="/audit"
              className="w-72 rounded-lg border border-border-subtle bg-bg-surface p-5 transition-shadow duration-200 hover:shadow-md"
            >
              <Text variant="small" className="text-text-secondary">
                Résultats de l'analyse axe-core et Lighthouse.
              </Text>
              <div className="relative z-1 mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconRight={faArrowRight}
                >
                  Consulter
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  aria-label="Supprimer le rapport"
                  iconOnly={faTrash}
                />
              </div>
            </Card>

          </div>
        </section>

        {/* ── SECTION 4 : NIVEAUX DE TITRE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Niveaux de titre</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">titleLevel</Text> contrôle la
              balise sémantique du titre (<Text as="span" variant="code">h2</Text> à{' '}
              <Text as="span" variant="code">h6</Text>). Par défaut{' '}
              <Text as="span" variant="code">h3</Text> (à adapter selon la hiérarchie
              de la page).
            </Text>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            {(['h2', 'h3', 'h4', 'h5', 'h6'] as const).map((level) => (
              <Card
                key={level}
                title={`Titre rendu en <${level}>`}
                href="/"
                titleLevel={level}
                className="rounded-lg border border-border-subtle bg-bg-surface p-4"
              >
                <Text variant="small" className="text-text-muted">
                  <Text as="span" variant="code">titleLevel="{level}"</Text>
                </Text>
              </Card>
            ))}
          </div>
        </section>

        {/* ── SECTION 5 : FOCUS VISIBLE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Focus visible</Heading>
            <Text variant="small">
              Naviguez à la touche Tab pour observer le comportement du focus.
              Le lien de titre reçoit{' '}
              <Text as="span" variant="code">focus-visible:underline</Text> et la
              carte parente affiche le{' '}
              <Text as="span" variant="code">--focus-ring</Text> via{' '}
              <Text as="span" variant="code">has-[a:focus-visible]</Text>,
              sans JavaScript.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Card
              title="Focusez ce titre avec Tab"
              href="/"
              className="w-72 rounded-lg border border-border-subtle bg-bg-surface p-5"
            >
              <Text variant="small" className="text-text-secondary">
                La carte entière affiche l'indicateur de focus dès que
                le lien de titre est atteint au clavier.
              </Text>
            </Card>
            <Card
              title="Puis celui-ci"
              href="/"
              className="w-72 rounded-lg border border-border-subtle bg-bg-surface p-5"
            >
              <Text variant="small" className="text-text-secondary">
                Chaque carte est indépendante, le focus ring s'applique
                uniquement à la carte active.
              </Text>
            </Card>
          </div>
        </section>

        {/* ── A11Y ── */}
        <section className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8">
          <Heading as="h2" level={4} className="mb-4 italic text-primary">
            Note accessibilité
          </Heading>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Redundant Click</Text>
              <Text variant="small">
                Le pseudo-élément <Text as="span" variant="code">::after</Text> du lien
                de titre couvre toute la carte. Un seul élément est exposé aux
                technologies d'assistance (pas de doublon de liens).
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Focus visible</Text>
              <Text variant="small">
                La pseudo-classe CSS <Text as="span" variant="code">:has()</Text> propage
                le focus du lien vers la carte parente. Aucun JavaScript, rendu
                natif du navigateur, robuste aux technologies d'assistance.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Sémantique</Text>
              <Text variant="small">
                La carte utilise <Text as="span" variant="code">&lt;article&gt;</Text>{' '}
                comme landmark sémantique. La prop{' '}
                <Text as="span" variant="code">titleLevel</Text> garantit une hiérarchie
                de titres correcte selon le contexte d'intégration.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Actions secondaires — z-index</Text>
              <Text variant="small">
                Les actions dans <Text as="span" variant="code">children</Text> doivent
                utiliser <Text as="span" variant="code">relative z-1</Text> pour
                passer au-dessus du <Text as="span" variant="code">::after</Text>.
                Sans cela, elles sont inaccessibles au clic souris.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}