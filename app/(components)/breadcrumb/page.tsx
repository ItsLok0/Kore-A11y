import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fil d\'Ariane',
  description: "Démonstration du composant Breadcrumb avec gestion de l'accessibilité.",
};

export default function BreadcrumbDemoPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Fil d'Ariane</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Breadcrumb accessible
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* SECTION 1 : DÉMO EN CONDITIONS RÉELLES */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Démo en conditions réelles</Heading>
            <Text variant="small">
              Le fil d'Ariane ci-dessous est le vrai composant actif sur cette page.
              Il reflète la route actuelle{' '}
              <Text as="span" variant="code">/breadcrumb</Text> via{' '}
              <Text as="span" variant="code">useSelectedLayoutSegments</Text> —
              aucune donnée simulée.
            </Text>
          </div>
          <div className="rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Text variant="caption" className="mb-4 block font-bold text-text-muted">
              Rendu actuel
            </Text>
            {/* Le vrai composant — déjà monté dans le layout */}
            <div className="rounded-xl border border-border-subtle bg-bg-surface px-4 py-3">
              <Text variant="small" className="text-text-muted italic">
                Le fil d'Ariane est affiché dans le layout global, au-dessus de cette page.
              </Text>
            </div>
          </div>
        </section>

        {/* SECTION 2 : COMPORTEMENT */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Comportement</Heading>
            <Text variant="small">
              Le composant s'adapte automatiquement à la profondeur de la route.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Page racine — <Text as="span" variant="code">/</Text>
              </Text>
              <Text variant="small">
                <Text as="span" variant="code">segments.length === 0</Text> →
                le composant retourne <Text as="span" variant="code">null</Text>.
                Aucun fil d'Ariane affiché sur la page d'accueil.
              </Text>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                1 niveau — <Text as="span" variant="code">/breadcrumb</Text>
              </Text>
              <Text variant="small">
                Affiche <strong>Accueil / Breadcrumb</strong>.
                Le dernier segment est non cliquable et porte{' '}
                <Text as="span" variant="code">aria-current="page"</Text>.
              </Text>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                N niveaux — <Text as="span" variant="code">/section/sous-section/page</Text>
              </Text>
              <Text variant="small">
                Chaque segment intermédiaire est un lien cliquable pointant vers
                sa route partielle. Les tirets et underscores sont remplacés par des espaces
                via <Text as="span" variant="code">replace(/-|_/g, ' ')</Text> et la première
                lettre est capitalisée.
              </Text>
            </div>

          </div>
        </section>

        {/* SECTION 3 : PROPS & API */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>API</Heading>
            <Text variant="small">
              Le composant ne prend aucune prop — il est entièrement piloté par le routeur Next.js.
            </Text>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-bg-surface p-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="py-2 pr-4 text-left font-semibold text-text-primary">Source</th>
                  <th className="py-2 pr-4 text-left font-semibold text-text-primary">Hook</th>
                  <th className="py-2 text-left font-semibold text-text-primary">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr>
                  <td className="py-2 pr-4"><Text as="span" variant="code">segments</Text></td>
                  <td className="py-2 pr-4"><Text as="span" variant="code">useSelectedLayoutSegments</Text></td>
                  <td className="py-2 text-text-secondary">Segments de la route active, groupes <Text as="span" variant="code">()</Text> filtrés</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4"><Text as="span" variant="code">href</Text></td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2 text-text-secondary">Construit dynamiquement par accumulation des segments</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4"><Text as="span" variant="code">label</Text></td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2 text-text-secondary">Segment capitalisé, tirets et underscores remplacés par des espaces</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* A11Y */}
        <section className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8">
          <Heading as="h2" level={4} className="mb-4 italic text-primary">
            Note accessibilité
          </Heading>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Landmark de navigation
              </Text>
              <Text variant="small">
                Le composant est wrappé dans un{' '}
                <Text as="span" variant="code">{'<nav>'}</Text> avec{' '}
                <Text as="span" variant="code">aria-label="Fil d'Ariane"</Text>.
                Les lecteurs d'écran peuvent naviguer directement vers ce landmark.
                Critère RGAA 12.2.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Page courante
              </Text>
              <Text variant="small">
                Le dernier segment porte <Text as="span" variant="code">aria-current="page"</Text>
                sur son <Text as="span" variant="code">{'<li>'}</Text>.
                Il est rendu en <Text as="span" variant="code">{'<span>'}</Text> non cliquable —
                naviguer vers la page courante n'a pas de sens. Critère WCAG 2.4.8.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Séparateur masqué
              </Text>
              <Text variant="small">
                Le séparateur <Text as="span" variant="code">›</Text> est dans un{' '}
                <Text as="span" variant="code">{'<li aria-hidden="true">'}</Text>.
                Il est ignoré par les lecteurs d'écran — la structure de liste suffit
                à communiquer la hiérarchie. Critère RGAA 10.1.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Structure HTML valide
              </Text>
              <Text variant="small">
                Seuls des <Text as="span" variant="code">{'<li>'}</Text> sont enfants directs
                du <Text as="span" variant="code">{'<ol>'}</Text>, séparateur inclus.
                Un <Text as="span" variant="code">{'<span>'}</Text> hors{' '}
                <Text as="span" variant="code">{'<li>'}</Text> serait invalide et
                pourrait désorienter les technologies d'assistance.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}