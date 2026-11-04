import { Tab } from '@/app/ui/components/Tab/tab';
import { Heading } from '@/app/ui/components/heading';
import { Input } from '@/app/ui/components/input';
import { Text } from '@/app/ui/components/text';
import { A11yReference } from '../_components/A11yReference';
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
        <A11yReference
          keyboard={[
            { keys: "Tab / Maj+Tab", action: "Entre dans la liste d'onglets sur l'onglet actif, puis passe directement au panneau actif (vérifié dans Chromium et testé). Les onglets inactifs ont `tabindex=\"-1\"` : un seul onglet est dans l'ordre de tabulation (test)." },
            { keys: "← / →", action: "Déplace le focus sur l'onglet précédent ou suivant et l'active (activation automatique). Boucle aux extrémités et saute les onglets `disabled`. Couvert par des tests." },
            { keys: "Début / Fin", action: "Va au premier ou au dernier onglet actif et l'active. Couvert par un test." },
            { keys: "Entrée / Espace", action: "Activent le bouton, donc sélectionnent l'onglet. Comme les flèches activent déjà l'onglet, ce n'est utile que si le clic ou le focus n'a pas suffi. Non testé." },
          ]}
          aria={[
            { name: "role=\"tablist\"", description: "Conteneur des onglets, nommé par le titre du composant (`aria-labelledby`). Couvert par un test." },
            { name: "role=\"tab\" sur un button", description: "Le déclencheur reste un `button` natif auquel on ajoute le rôle `tab`, ce qui est la seule façon d'obtenir ce rôle : le HTML n'a pas d'élément natif pour les onglets." },
            { name: "aria-selected", description: "`true` sur l'onglet actif, `false` sur les autres. Couvert par un test." },
            { name: "aria-controls", description: "Référence l'`id` du panneau de l'onglet. Les ids viennent de `useId`." },
            { name: "role=\"tabpanel\" + aria-labelledby", description: "Chaque panneau est nommé par son onglet (test). Les panneaux inactifs portent l'attribut `hidden` : `display: none`, vérifié dans Chromium." },
            { name: "tabindex", description: "Roving tabindex : `0` sur l'onglet actif, `-1` sur les autres. Le panneau actif a `tabindex=\"0\"` pour recevoir le focus (test)." },
            { name: "disabled", description: "Attribut natif sur le bouton : non focalisable, ignoré par les flèches. Le `Button` ajoute aussi `aria-disabled` et `aria-busy=\"false\"` sur chaque onglet." },
          ]}
          wcag={[
            { criterion: "1.3.1 Info et relations", level: "A", how: "Liste, onglets et panneaux reliés par `aria-controls` et `aria-labelledby`." },
            { criterion: "2.1.1 Clavier", level: "A", how: "Tout est opérable au clavier : flèches, Début, Fin et Tab (tests)." },
            { criterion: "4.1.2 Nom, rôle et valeur", level: "A", how: "Nom issu du texte du bouton, état via `aria-selected` (tests : `getByRole` avec `name`)." },
            { criterion: "2.4.3 Parcours du focus", level: "A", how: "Roving tabindex : un seul arrêt pour la liste, puis le panneau." },
            { criterion: "2.4.7 Focus visible", level: "AA", how: "Anneau `--focus-ring` sur `:focus-visible` pour les onglets et le panneau. Rendu et contraste non mesurés." },
            { criterion: "2.5.8 Taille de la cible (minimum)", level: "AA", how: "Les onglets mesurent 40 px de haut (mesuré dans Chromium), au-dessus de 24 px." },
          ]}
          limits={[
            "Le panneau a toujours `tabindex=\"0\"`, même quand son contenu contient déjà un élément focalisable : l'APG ne le recommande que sans élément focalisable. C'est un arrêt de tabulation en plus.",
            "L'onglet actif se distingue par le style du bouton (`primary` plein contre `outline`) en plus de `aria-selected` : contraste non mesuré (1.4.1, 1.4.11).",
            "Si la section marquée `isActive` est aussi `disabled`, le comportement n'est pas défini ni testé.",
            "Pas de variante verticale ni d'activation manuelle : seules les flèches gauche et droite sont gérées.",
            "Test manuel avec lecteur d'écran (NVDA, VoiceOver) : à faire, notamment l'annonce de l'onglet au changement par les flèches.",
          ]}
        />

      </div>
    </div>
  );
}