import { Text } from '@/app/ui/components/text';
import { Heading } from '@/app/ui/components/heading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Système Typographique',
  description: 'Démonstration des composants Heading et Text pour une structure sémantique et accessible.',
};

export default function TypographyDemoPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Typographie</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Titres & Paragraphes accessibles
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* ── SECTION 1 : HIÉRARCHIE VISUELLE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Hiérarchie visuelle</Heading>
            <Text variant="small">
              Les 6 niveaux de titres disponibles via la prop{' '}
              <Text as="span" variant="code">level</Text>. Le style est indépendant
              de la balise HTML rendue.
            </Text>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Heading as="span" level={1}>Heading Level 1</Heading>
            <Heading as="span" level={2}>Heading Level 2</Heading>
            <Heading as="span" level={3}>Heading Level 3</Heading>
            <Heading as="span" level={4}>Heading Level 4</Heading>
            <Heading as="span" level={5}>Heading Level 5</Heading>
            <Heading as="span" level={6}>Heading Level 6</Heading>
          </div>
        </section>

        {/* ── SECTION 2 : SÉMANTIQUE VS VISUEL ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Sémantique vs Visuel</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">as</Text> contrôle la balise HTML,
              la prop <Text as="span" variant="code">level</Text> contrôle le style visuel.
              Les deux sont totalement indépendants.
            </Text>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-border-subtle p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Démonstration
              </Text>
              <Text variant="small">
                Balise <Text as="span" variant="code">h3</Text> dans le DOM,
                style <Text as="span" variant="code">level={1}</Text> appliqué visuellement.
              </Text>
              <Heading as="h3" level={1}>Style H1 / Balise H3</Heading>
            </div>
            <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <Text variant="caption" className="font-bold text-primary">
                Note accessibilité
              </Text>
              <Text variant="small">
                Ce découplage permet de ne jamais sauter de niveau sémantique
                dans le DOM (ex: H1 → H3) tout en respectant les maquettes
                graphiques. Les lecteurs d'écran naviguent sur la structure
                réelle, pas le style visuel.
              </Text>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 : VARIANTES TEXT ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Variantes Text</Heading>
            <Text variant="small">
              5 variantes couvrant tous les besoins typographiques du corps de page.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Lead
              </Text>
              <Text variant="lead">
                Introduction ou résumé en haut de page. Taille optimisée pour
                accrocher le lecteur.
              </Text>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Body (défaut)
              </Text>
              <Text variant="body">
                Texte courant pour les paragraphes. Hauteur de ligne optimisée
                pour la lecture longue.
              </Text>
              <Text variant="body" className="font-bold italic">
                Supporte les utilitaires Tailwind via <Text as="span" variant="code">className</Text>.
              </Text>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Small
              </Text>
              <Text variant="small">
                Informations secondaires, notes ou descriptions denses.
                Lisible sans être intrusif.
              </Text>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Caption
              </Text>
              <Text variant="caption" className="block">
                PUBLIÉ LE 22 MAI 2026
              </Text>
              <Text variant="caption" as="figcaption" className="italic">
                Légende d'illustration
              </Text>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:col-span-2">
              <Text variant="caption" className="font-bold text-text-muted">
                Code
              </Text>
              <div className="flex flex-wrap items-center gap-2">
                <Text variant="body">Installez le package via</Text>
                <Text variant="code">npm i @ui/system</Text>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 4 : POLYMORPHISME ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Polymorphisme</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">as</Text> permet de rendre n'importe
              quelle balise HTML tout en conservant le style de la variante choisie.
            </Text>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-border-subtle p-6">
              <Text variant="small" className="italic">
                Rendu <Text as="span" variant="code">&lt;label&gt;</Text>
              </Text>
              <Text
                variant="body"
                as="label"
                htmlFor="demo"
                className="cursor-pointer font-bold underline decoration-primary"
              >
                Cliquez-moi (Label)
              </Text>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-border-subtle p-6">
              <Text variant="small" className="italic">
                Rendu <Text as="span" variant="code">&lt;span&gt;</Text>
              </Text>
              <Text
                variant="body"
                as="span"
                className="rounded bg-primary/10 px-2 py-1"
              >
                Élément en ligne (Span)
              </Text>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-border-subtle p-6">
              <Text variant="small" className="italic">
                Rendu <Text as="span" variant="code">&lt;figcaption&gt;</Text>
              </Text>
              <Text variant="caption" as="figcaption" className="italic">
                Légende d'une figure ou image
              </Text>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-border-subtle p-6">
              <Text variant="small" className="italic">
                Rendu <Text as="span" variant="code">&lt;p&gt;</Text> (défaut)
              </Text>
              <Text variant="body">
                Sans prop <Text as="span" variant="code">as</Text>, le rendu
                par défaut est un <Text as="span" variant="code">&lt;p&gt;</Text>.
              </Text>
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
                Unités relatives
              </Text>
              <Text variant="small">
                Toutes les tailles utilisent des unités <Text as="span" variant="code">rem</Text>,
                respectant le redimensionnement du texte défini par l'utilisateur
                dans les préférences du navigateur.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Structure de document
              </Text>
              <Text variant="small">
                La séparation <Text as="span" variant="code">as</Text> / <Text as="span" variant="code">level</Text>{' '}
                garantit une hiérarchie de titres cohérente dans le DOM,
                essentielle pour la navigation au lecteur d'écran.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}