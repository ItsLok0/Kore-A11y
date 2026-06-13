import { Button } from '@/app/ui/components/Button/button';
import { Tab } from '@/app/ui/components/Tab/tab';
import { Popover } from '@/app/ui/components/Tooltip_Popover/popover';
import { Tooltip } from '@/app/ui/components/Tooltip_Popover/tooltip';
import { Heading } from '@/app/ui/components/heading';
import { Input } from '@/app/ui/components/input';
import { Text } from '@/app/ui/components/text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Composant Tabs',
  description: "Démonstration du composant onglets avec gestion de l'accessibilité.",
};

export default function TabDemoPage() {

  const formulaireSections = [
    {
      title: 'Identité',
      isActive: true,
      content: (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Nom" id="tab-demo-nom" placeholder="Dupont" />
            <Input label="Prénom" id="tab-demo-prenom" placeholder="Marie" />
          </div>
          <Input label="Email" id="tab-demo-email" type="email" placeholder="marie@exemple.fr" />
        </div>
      ),
    },
    {
      title: 'Adresse',
      content: (
        <div className="flex flex-col gap-4">
          <Input label="Rue" id="tab-demo-street" placeholder="12 rue de la Paix" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Code postal" id="tab-demo-zip" placeholder="75001" />
            <Input label="Ville" id="tab-demo-city" placeholder="Paris" />
          </div>
        </div>
      ),
    },
    {
      title: 'Paiement',
      content: (
        <div className="flex flex-col gap-4">
          <Input label="Titulaire de la carte" id="tab-demo-cardholder" placeholder="Marie Dupont" />
          <Input label="Numéro de carte" id="tab-demo-card" placeholder="4242 4242 4242 4242" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Date d'expiration" id="tab-demo-expiry" placeholder="MM/AA" />
            <Input label="CVV" id="tab-demo-cvv" placeholder="123" />
          </div>
        </div>
      ),
    },
  ];

  const docSections = [
    {
      title: 'Description',
      isActive: true,
      content: (
        <div className="flex flex-col gap-3">
          <Text variant="small">
            Le composant <Text as="span" variant="code">Tab</Text> organise un contenu
            en sections exclusives — une seule section est visible à la fois.
            Il convient lorsque les sections sont de même nature et que l'utilisateur
            n'a pas besoin de les comparer simultanément.
          </Text>
          <Text variant="small">
            Pour des contenus pouvant coexister ou être consultés indépendamment,
            préférer le composant <Text as="span" variant="code">Accordion</Text>.
          </Text>
        </div>
      ),
    },
    {
      title: 'Props',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-2 pr-4 text-left font-semibold text-text-primary">Prop</th>
                <th className="py-2 pr-4 text-left font-semibold text-text-primary">Type</th>
                <th className="py-2 text-left font-semibold text-text-primary">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {[
                { prop: 'title', type: 'string', desc: 'Titre du groupe d\'onglets (aria-labelledby)' },
                { prop: 'titleLevel', type: 'HeadingTag', desc: 'Niveau sémantique du titre. Défaut : h3' },
                { prop: 'sections', type: 'TabSectionProps[]', desc: 'Liste des onglets et leur contenu' },
                { prop: 'className', type: 'string', desc: 'Classes CSS additionnelles' },
              ].map(({ prop, type, desc }) => (
                <tr key={prop}>
                  <td className="py-2 pr-4"><Text as="span" variant="code">{prop}</Text></td>
                  <td className="py-2 pr-4 text-text-secondary">{type}</td>
                  <td className="py-2 text-text-secondary">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: 'TabSectionProps',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-2 pr-4 text-left font-semibold text-text-primary">Prop</th>
                <th className="py-2 pr-4 text-left font-semibold text-text-primary">Type</th>
                <th className="py-2 text-left font-semibold text-text-primary">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {[
                { prop: 'title', type: 'string', desc: 'Label de l\'onglet' },
                { prop: 'content', type: 'ReactNode', desc: 'Contenu du panel' },
                { prop: 'isActive', type: 'boolean?', desc: 'Onglet actif par défaut' },
                { prop: 'disabled', type: 'boolean?', desc: 'Désactive l\'onglet' },
              ].map(({ prop, type, desc }) => (
                <tr key={prop}>
                  <td className="py-2 pr-4"><Text as="span" variant="code">{prop}</Text></td>
                  <td className="py-2 pr-4 text-text-secondary">{type}</td>
                  <td className="py-2 text-text-secondary">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Onglet</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Tabs accessible
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* SECTION 1 : CAS MÉTIER */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Cas métier</Heading>
            <Text variant="small">
              Formulaire de commande découpé en trois étapes. L'onglet actif par défaut
              est défini via la prop <Text as="span" variant="code">isActive</Text>.
            </Text>
          </div>
          <div className="rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Tab
              title="Formulaire de commande"
              titleLevel="h3"
              sections={formulaireSections}
            />
          </div>
        </section>

        {/* SECTION 2 : DOCUMENTATION */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Documentation</Heading>
            <Text variant="small">
              Les onglets acceptent n'importe quel{' '}
              <Text as="span" variant="code">ReactNode</Text> dans la prop{' '}
              <Text as="span" variant="code">content</Text>. Ici, des tableaux de
              documentation pour illustrer un usage référence.
            </Text>
          </div>
          <div className="rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Tab
              title="Documentation du composant"
              titleLevel="h3"
              sections={docSections}
            />
          </div>
        </section>

        {/* SECTION 3 : ÉTATS */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>États</Heading>
            <Text variant="small">
              Combinaison des props <Text as="span" variant="code">isActive</Text> et{' '}
              <Text as="span" variant="code">disabled</Text> sur les sections.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Actif par défaut — <Text as="span" variant="code">isActive</Text>
              </Text>
              <Tab
                title="Exemple isActive"
                sections={[
                  {
                    title: 'Premier',
                    content: <Text variant="small">Cet onglet est ouvert par défaut grâce à <Text as="span" variant="code">isActive: true</Text>.</Text>,
                  },
                  {
                    title: 'Second',
                    isActive: true,
                    content: <Text variant="small">Cet onglet est actif par défaut.</Text>,
                  },
                ]}
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Désactivé — <Text as="span" variant="code">disabled</Text>
              </Text>
              <Tab
                title="Exemple disabled"
                sections={[
                  {
                    title: 'Disponible',
                    isActive: true,
                    content: <Text variant="small">Cet onglet est accessible.</Text>,
                  },
                  {
                    title: 'Désactivé',
                    disabled: true,
                    content: <Text variant="small">Ce contenu n'est pas accessible.</Text>,
                  },
                ]}
              />
              <Text variant="small" className="text-text-muted">
                Un onglet désactivé est retiré de la navigation clavier et signalé
                aux technologies d'assistance via <Text as="span" variant="code">aria-disabled</Text>.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:col-span-2">
              <Text variant="caption" className="font-bold text-text-muted">
                Groupe mixte
              </Text>
              <Tab
                title="Groupe mixte"
                sections={[
                  {
                    title: 'Actif',
                    isActive: true,
                    content: <Text variant="small">Section active par défaut.</Text>,
                  },
                  {
                    title: 'Normal',
                    content: <Text variant="small">Section standard.</Text>,
                  },
                  {
                    title: 'Désactivé',
                    disabled: true,
                    content: <Text variant="small">Section inaccessible.</Text>,
                  },
                  {
                    title: 'Autre',
                    content: <Text variant="small">Une quatrième section pour tester la navigation clavier avec Home/End.</Text>,
                  },
                ]}
              />
            </div>

          </div>
        </section>

        {/* SECTION 4 : NIVEAU DE TITRE */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Niveau de titre</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">titleLevel</Text> contrôle
              le niveau sémantique du titre labellisant le groupe d'onglets. À adapter
              selon le contexte de la page pour respecter la hiérarchie des titres.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {([2, 3, 4] as const).map((level) => (
              <div key={level} className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
                <Text variant="caption" className="font-bold text-text-muted">
                  <Text as="span" variant="code">titleLevel="h{level}"</Text>
                </Text>
                <Tab
                  title={`Titre h${level}`}
                  titleLevel={`h${level}`}
                  sections={[
                    {
                      title: 'Onglet A',
                      isActive: true,
                      content: (
                        <Text variant="small">
                          Le groupe est labellisé par un{' '}
                          <Text as="span" variant="code">{`h${level}`}</Text>.
                        </Text>
                      ),
                    },
                    {
                      title: 'Onglet B',
                      content: <Text variant="small">Second onglet.</Text>,
                    },
                  ]}
                />
              </div>
            ))}
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
                Balisage ARIA
              </Text>
              <Text variant="small">
                Chaque bouton porte <Text as="span" variant="code">role="tab"</Text>,{' '}
                <Text as="span" variant="code">aria-selected</Text> et{' '}
                <Text as="span" variant="code">aria-controls</Text>. Le panel actif est un{' '}
                <Text as="span" variant="code">role="tabpanel"</Text> lié par{' '}
                <Text as="span" variant="code">aria-labelledby</Text>.
                Conforme au pattern APG Tabs du W3C.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Navigation clavier (pattern automatique)
              </Text>
              <Text variant="small">
                <Text as="span" variant="code">←</Text> <Text as="span" variant="code">→</Text> déplacent
                le focus entre les onglets et les activent automatiquement.{' '}
                <Text as="span" variant="code">Début</Text> et{' '}
                <Text as="span" variant="code">Fin</Text> sautent au premier et dernier onglet.
                Les onglets désactivés sont ignorés lors de la navigation.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Roving tabindex
              </Text>
              <Text variant="small">
                Seul l'onglet actif a <Text as="span" variant="code">tabIndex=0</Text>.
                Les autres ont <Text as="span" variant="code">tabIndex=-1</Text>.
                La touche <Text as="span" variant="code">Tab</Text> saute directement
                du bouton actif au <Text as="span" variant="code">tabpanel</Text>,
                sans traverser les boutons inactifs.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Identifiants uniques
              </Text>
              <Text variant="small">
                Les ids des tabs et panels sont générés via{' '}
                <Text as="span" variant="code">useId</Text> (React 18).
                Plusieurs instances de <Text as="span" variant="code">Tab</Text> peuvent
                coexister sur une même page sans collision d'identifiants,
                y compris en rendu serveur.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}