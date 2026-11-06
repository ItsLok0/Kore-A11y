import type { Metadata } from 'next';
import { Heading } from "@/app/ui/components/heading";
import { Text } from "@/app/ui/components/text";
import { Button } from "@/app/ui/components/Button/button";
import { Card } from "@/app/ui/components/Card/card";
import { A11yReference } from "../_components/A11yReference";
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
        <A11yReference
          keyboard={[
            { keys: "Tab / Maj+Tab", action: "Une carte avec `href` a un seul arrêt : le lien du titre. Une carte statique n'en a aucun (test). Les actions secondaires placées dans `children` ont chacune leur arrêt." },
            { keys: "Entrée", action: "Suit le lien du titre (comportement natif d'un lien)." },
          ]}
          aria={[
            { name: "article", description: "La carte est un `<article>` : un élément de section, rôle `article` implicite. Ce n'est pas un landmark (l'ancienne note le disait à tort). Il n'a pas de nom propre ; l'`id` généré par `useId` ne sert qu'au lien." },
            { name: "Titre + lien", description: "Le titre est un `Heading` (`h3` par défaut, réglable avec `titleLevel`) ; avec `href`, le lien est à l'intérieur du titre et son nom est le texte du titre. Couvert par un test." },
            { name: "Lien étiré (::after)", description: "Le `::after` du lien couvre toute la carte : un seul lien est exposé aux technologies d'assistance. Mesuré dans Chromium : le centre des 11 cartes à lien tombe sur le lien, et les boutons secondaires restent cliquables dans les 4 cartes qui en ont (avec `relative z-1`)." },
            { name: "tabIndex={0} sur le lien", description: "Redondant : un `<a href>` est déjà focalisable. Sans effet." },
          ]}
          wcag={[
            { criterion: "1.3.1 Info et relations", level: "A", how: "`article` et titre de niveau réglable : la structure est dans le balisage." },
            { criterion: "2.1.1 Clavier", level: "A", how: "Le lien est atteint par Tab et activé par Entrée (test pour l'arrêt de tabulation)." },
            { criterion: "2.4.4 Fonction du lien (en contexte)", level: "A", how: "Le nom du lien est le titre de la carte." },
            { criterion: "2.4.7 Focus visible", level: "AA", how: "L'outline du lien est supprimé ; `:has(a:focus-visible)` dessine sur l'article un anneau de 3 px blanc puis 2 px `#3730a3`. Mesuré dans Chromium au clavier, après la transition de 200 ms. Contraste de l'anneau non mesuré." },
            { criterion: "2.5.8 Taille de la cible (minimum)", level: "AA", how: "Toute la surface de la carte est la cible du lien." },
          ]}
          limits={[
            "L'anneau de focus est animé (`transition-shadow`, 200 ms) : il apparaît avec un léger retard, vu en mesure immédiate (aucune ombre) puis après 600 ms (anneau présent).",
            "Un lien qui couvre la carte empêche de sélectionner le texte à la souris (déduit du code, non mesuré).",
            "Les actions secondaires doivent avoir `relative z-1`, sinon elles passent sous le `::after` et deviennent inaccessibles à la souris (vérifié sur les cartes de la démo qui en ont).",
            "`titleLevel` est laissé à l'intégrateur : rien ne garantit que la hiérarchie de titres de la page reste cohérente.",
            "Test manuel avec lecteur d'écran (NVDA, VoiceOver) : à faire.",
          ]}
        />

      </div>
    </div>
  );
}