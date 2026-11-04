import { Accordion } from '@/app/ui/components/Accordion/accordion';
import { Heading } from '@/app/ui/components/heading';
import { Input } from '@/app/ui/components/input';
import { Text } from '@/app/ui/components/text';
import { A11yReference } from '../_components/A11yReference';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Composant Accordion',
  description: "Démonstration du composant accordéon avec gestion de l'accessibilité.",
};

export default function AccordionDemoPage() {
  const formulaireSections = [
    {
      title: 'Informations personnelles',
      defaultOpen: true,
      content: (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Nom" id="demo-nom" placeholder="Dupont" />
            <Input label="Prénom" id="demo-prenom" placeholder="Marie" />
          </div>
          <Input label="Email" id="demo-email" type="email" placeholder="marie@exemple.fr" />
        </div>
      ),
    },
    {
      title: 'Adresse de facturation',
      content: (
        <div className="flex flex-col gap-4">
          <Input label="Rue" id="demo-billing-street" placeholder="12 rue de la Paix" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Code postal" id="demo-billing-zip" placeholder="75001" />
            <Input label="Ville" id="demo-billing-city" placeholder="Paris" />
          </div>
        </div>
      ),
    },
    {
      title: 'Adresse de livraison',
      content: (
        <div className="flex flex-col gap-4">
          <Input label="Rue" id="demo-shipping-street" placeholder="5 avenue des Fleurs" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Code postal" id="demo-shipping-zip" placeholder="69001" />
            <Input label="Ville" id="demo-shipping-city" placeholder="Lyon" />
          </div>
        </div>
      ),
    },
  ];

  const faqSections = [
    {
      title: 'Qu\'est-ce que le RGAA ?',
      content: (
        <Text variant="small">
          Le Référentiel Général d'Amélioration de l'Accessibilité (RGAA) est le cadre
          réglementaire français basé sur les WCAG 2.1. Il définit les critères techniques
          à respecter pour rendre un site accessible à tous les utilisateurs, y compris
          ceux qui utilisent des technologies d'assistance.
        </Text>
      ),
    },
    {
      title: 'Pourquoi utiliser un accordéon plutôt qu\'un onglet ?',
      content: (
        <Text variant="small">
          L'accordéon convient aux contenus dont les sections peuvent coexister ou être
          consultées de façon indépendante. Les onglets sont préférables quand une seule
          section est pertinente à la fois et que les sections sont de même nature.
          Le choix doit être guidé par la structure de l'information, pas par l'esthétique.
        </Text>
      ),
    },
    {
      title: 'Le contenu masqué est-il indexé par les moteurs de recherche ?',
      content: (
        <Text variant="small">
          Le contenu d'un panneau fermé reste dans le HTML, mais il est masqué avec{' '}
          <Text as="span" variant="code">display: none</Text> (classe{' '}
          <Text as="span" variant="code">hidden</Text>) : il est ignoré des lecteurs
          d'écran et sorti de l'ordre de tabulation. L'effet sur l'indexation par les
          moteurs de recherche n'a pas été vérifié.
        </Text>
      ),
    },
  ];

  const sectionDesactivee = [
    {
      title: 'Section disponible',
      defaultOpen: true,
      content: (
        <Text variant="small">
          Cette section est accessible et ouverte par défaut via la prop{' '}
          <Text as="span" variant="code">defaultOpen</Text>.
        </Text>
      ),
    },
    {
      title: 'Section désactivée',
      disabled: true,
      content: (
        <Text variant="small">
          Ce contenu n'est pas accessible.
        </Text>
      ),
    },
    {
      title: 'Section normale',
      content: (
        <Text variant="small">
          Une section standard sans état particulier.
        </Text>
      ),
    },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Accordéon</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Accordion accessible
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* SECTION 1 : CAS MÉTIER */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Cas métier</Heading>
            <Text variant="small">
              Formulaire en trois sections. La première est ouverte par défaut
              via la prop <Text as="span" variant="code">defaultOpen</Text>.
            </Text>
          </div>
          <div className="rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Accordion sections={formulaireSections} headingLevel='h3' />
          </div>
        </section>

        {/* SECTION 2 : CONTENU TEXTE */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Contenu textuel</Heading>
            <Text variant="small">
              L'accordéon accepte n'importe quel{' '}
              <Text as="span" variant="code">ReactNode</Text> dans la prop{' '}
              <Text as="span" variant="code">content</Text>. Ici, du texte simple
              pour illustrer un usage FAQ.
            </Text>
          </div>
          <div className="rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Accordion sections={faqSections} headingLevel='h3' />
          </div>
        </section>

        {/* SECTION 3 : ÉTATS */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>États</Heading>
            <Text variant="small">
              Combinaison des props <Text as="span" variant="code">defaultOpen</Text> et{' '}
              <Text as="span" variant="code">disabled</Text> sur les sections.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Ouverte par défaut — <Text as="span" variant="code">defaultOpen</Text>
              </Text>
              <Accordion
                sections={[{
                  title: 'Section ouverte',
                  defaultOpen: true,
                  content: (
                    <Text variant="small">
                      La prop <Text as="span" variant="code">defaultOpen</Text> initialise
                      l'état via <Text as="span" variant="code">useState(defaultOpen ?? false)</Text>.
                      Aucun JavaScript supplémentaire requis.
                    </Text>
                  ),
                }]}
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Désactivée — <Text as="span" variant="code">disabled</Text>
              </Text>
              <Accordion
                sections={[{
                  title: 'Section désactivée',
                  disabled: true,
                  content: (
                    <Text variant="small">Contenu inaccessible.</Text>
                  ),
                }]}
              />
              <Text variant="small" className="text-text-muted">
                L'attribut natif <Text as="span" variant="code">disabled</Text> retire
                le bouton de l'ordre de tabulation et le signale aux technologies d'assistance.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:col-span-2">
              <Text variant="caption" className="font-bold text-text-muted">
                Groupe mixte
              </Text>
              <Accordion sections={sectionDesactivee} headingLevel='h3' />
            </div>

          </div>
        </section>

        {/* SECTION 4 : NIVEAU DE TITRE */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Niveau de titre</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">headingLevel</Text> contrôle
              le niveau sémantique du titre wrappant chaque trigger. À adapter
              selon le contexte de la page pour respecter la hiérarchie des titres.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {([2, 3, 4] as const).map((level) => (
              <div key={level} className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
                <Text variant="caption" className="font-bold text-text-muted">
                  <Text as="span" variant="code">headingLevel={level}</Text>
                </Text>
                <Accordion
                  headingLevel={`h${level}`}
                  sections={[{
                    title: `Titre h${level}`,
                    content: (
                      <Text variant="small">
                        Le trigger est rendu dans un{' '}
                        <Text as="span" variant="code">{`h${level}`}</Text>.
                      </Text>
                    ),
                  }]}
                />
              </div>
            ))}
          </div>
        </section>

        {/* A11Y */}
        <A11yReference
          keyboard={[
            { keys: "Tab / Maj+Tab", action: "Place le focus sur chaque bouton d'en-tête, un par un. Pas de navigation aux flèches : le pattern APG la rend facultative. Un bouton `disabled` est sauté (test)." },
            { keys: "Entrée", action: "Ouvre ou ferme la section. Couvert par un test." },
            { keys: "Espace", action: "Ouvre ou ferme la section. Couvert par un test." },
          ]}
          aria={[
            { name: "button dans un titre", description: "Le déclencheur est un `button` natif, placé dans un élément de titre (`h3` par défaut, réglable avec `headingLevel`), comme le demande le pattern APG. Les lecteurs d'écran peuvent naviguer par titres." },
            { name: "aria-expanded", description: "`true` ou `false` sur le bouton selon l'état de la section. Couvert par un test." },
            { name: "aria-controls", description: "Référence l'`id` du panneau, généré avec `useId` (pas de collision, y compris au rendu serveur)." },
            { name: "role=\"region\" + aria-labelledby", description: "Le panneau est une région nommée par son bouton (test). Fermé, il porte la classe `hidden` (test) et `display: none` (vérifié dans Chromium, pas en jsdom) : il sort de l'ordre de tabulation et des lecteurs d'écran." },
            { name: "disabled", description: "Attribut natif sur le bouton : non focalisable, signalé comme indisponible. Le `Button` ajoute aussi `aria-disabled`." },
          ]}
          wcag={[
            { criterion: "1.3.1 Info et relations", level: "A", how: "Titre + bouton + région nommée : la structure est exposée par le balisage." },
            { criterion: "2.1.1 Clavier", level: "A", how: "Opérable au clavier grâce au `button` natif ; Entrée et Espace testés." },
            { criterion: "4.1.2 Nom, rôle et valeur", level: "A", how: "Nom issu du titre de la section, état via `aria-expanded` (tests : `getByRole` avec `name`)." },
            { criterion: "2.4.7 Focus visible", level: "AA", how: "Anneau `--focus-ring` sur `:focus-visible`. Rendu et contraste non mesurés." },
            { criterion: "2.5.8 Taille de la cible (minimum)", level: "AA", how: "Le bouton d'en-tête occupe toute la largeur et mesure 56 px de haut (mesuré dans Chromium), au-dessus de 24 px." },
            { criterion: "2.3.3 Animation à partir d'interactions", level: "AAA", how: "Les transitions utilisent `motion-safe:` : elles sont désactivées si l'utilisateur réduit les animations." },
          ]}
          limits={[
            "Le pattern APG recommande d'éviter `role=\"region\"` quand il y a plus de six panneaux (trop de repères à la lecture). Le composant n'a pas de limite : à surveiller pour les longues listes.",
            "Seule la rotation de l'icône est animée. L'ouverture du panneau est instantanée : `hidden` ne se prête pas à une transition, et `grid-template-rows` ne change jamais.",
            "Chaque section s'ouvre indépendamment : il n'y a pas de mode « une seule section ouverte à la fois ».",
            "Les tests jsdom ne mesurent ni le focus visible ni le contraste, et ne remplacent pas un test manuel avec lecteur d'écran (NVDA, VoiceOver) : à faire.",
          ]}
        />

      </div>
    </div>
  );
}