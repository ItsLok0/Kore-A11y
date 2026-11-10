import type { Metadata } from 'next';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { A11yReference } from '../_components/A11yReference';

export const metadata: Metadata = {
    title: 'Composant Navbar',
    description: 'Démonstration du composant Navbar : navigation desktop, menu mobile burger, dropdown disclosure et accessibilité clavier.',
};

export default function NavbarDemoPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Navbar</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Navigation principale accessible & sémantique
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* ── SECTION 1 : STRUCTURE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Structure</Heading>
            <Text variant="small">
              La navbar est composée de trois parties distinctes : le logo (lien d'accueil),
              la navigation desktop et le menu mobile burger. Chaque partie est sémantiquement
              isolée pour les technologies d'assistance.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">Logo</Text>
              <Text as="span" variant="code" className="w-fit">&lt;Link href="/"&gt;</Text>
              <Text variant="small" className="text-text-muted">
                Lien natif <Text as="span" variant="code">&lt;a&gt;</Text> via{' '}
                <Text as="span" variant="code">next/link</Text>. Focusable nativement,
                pas de <Text as="span" variant="code">tabIndex</Text> redondant.
              </Text>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">Desktop</Text>
              <Text as="span" variant="code" className="w-fit">&lt;nav aria-label&gt;</Text>
              <Text variant="small" className="text-text-muted">
                Landmark <Text as="span" variant="code">&lt;nav&gt;</Text> avec{' '}
                <Text as="span" variant="code">aria-label="Navigation principale"</Text>.
                Masqué sous <Text as="span" variant="code">xl</Text>, remplacé par le burger.
              </Text>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">Mobile</Text>
              <Text as="span" variant="code" className="w-fit">inert + useFocusTrap</Text>
              <Text variant="small" className="text-text-muted">
                Panneau <Text as="span" variant="code">fixed inset-0</Text> avec{' '}
                <Text as="span" variant="code">inert</Text> quand fermé — empêche
                le focus d'atteindre les liens masqués visuellement.
              </Text>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 : DROPDOWN DISCLOSURE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Dropdown — pattern Disclosure</Heading>
            <Text variant="small">
              Le dropdown suit le{' '}
              <Text as="span" variant="code">Disclosure Navigation Pattern</Text> de l'APG W3C,
              recommandé pour les navigations de sites vitrine. Contrairement au pattern{' '}
              <Text as="span" variant="code">menubar</Text>, il n'impose pas de navigation
              aux flèches — le <Text as="span" variant="code">Tab</Text> séquentiel suffit.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Attributs ARIA du trigger
              </Text>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Text as="span" variant="code" className="shrink-0">aria-expanded</Text>
                  <Text variant="small" className="text-text-muted">
                    Annonce l'état ouvert/fermé aux AT.
                  </Text>
                </div>
                <div className="flex items-start gap-2">
                  <Text as="span" variant="code" className="shrink-0">aria-controls</Text>
                  <Text variant="small" className="text-text-muted">
                    Relie le trigger à la liste via un ID unique.
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Fermeture du dropdown
              </Text>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Text as="span" variant="code" className="shrink-0">Escape</Text>
                  <Text variant="small" className="text-text-muted">
                    Ferme et rend le focus au trigger.
                  </Text>
                </div>
                <div className="flex items-start gap-2">
                  <Text as="span" variant="code" className="shrink-0">onBlurCapture</Text>
                  <Text variant="small" className="text-text-muted">
                    Ferme si le focus sort du conteneur dropdown.
                  </Text>
                </div>
                <div className="flex items-start gap-2">
                  <Text as="span" variant="code" className="shrink-0">Clic extérieur</Text>
                  <Text variant="small" className="text-text-muted">
                    Ferme via <Text as="span" variant="code">mousedown</Text> en dehors du ref.
                  </Text>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3 : MENU MOBILE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Menu mobile</Heading>
            <Text variant="small">
              Le panneau mobile implémente un focus trap complet conforme RGAA 4.1 critère 7.3.
              Le scroll de la page est verrouillé à l'ouverture.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Cycle de vie du focus
              </Text>
              <ol className="flex flex-col gap-2">
                {[
                  { step: '1. Ouverture', desc: 'Focus déplacé sur le premier lien du panneau.' },
                  { step: '2. Navigation', desc: 'Tab/Shift+Tab boucle dans le panneau (useFocusTrap).' },
                  { step: '3. Fermeture', desc: 'Focus rendu au bouton burger (Escape ou clic lien).' },
                ].map(({ step, desc }) => (
                  <li key={step} className="flex items-start gap-2">
                    <Text as="span" variant="code" className="shrink-0">{step}</Text>
                    <Text variant="small" className="text-text-muted">{desc}</Text>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Attributs du bouton burger
              </Text>
              <div className="flex flex-col gap-2">
                {[
                  { attr: 'aria-expanded', desc: 'État ouvert/fermé annoncé aux AT.' },
                  { attr: 'aria-controls', desc: 'Relie le bouton au panneau #mobile-menu.' },
                  { attr: 'aria-label', desc: 'Dynamique : "Ouvrir" / "Fermer le menu".' },
                ].map(({ attr, desc }) => (
                  <div key={attr} className="flex items-start gap-2">
                    <Text as="span" variant="code" className="shrink-0">{attr}</Text>
                    <Text variant="small" className="text-text-muted">{desc}</Text>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 4 : ÉTAT ACTIF ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>État actif & indicateur visuel</Heading>
            <Text variant="small">
              L'état actif est signalé par la couleur <Text as="span" variant="code">text-primary</Text>{' '}
              et un soulignement <Text as="span" variant="code">after:</Text> — jamais par la couleur seule
              (RGAA 3.1, critère couleur non exclusive).
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-success">
                ✓ Conforme RGAA 3.1
              </Text>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-2">
                  <span className="relative p-2 text-sm font-medium text-primary after:absolute after:left-2 after:right-2 after:bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full">
                    Lien actif
                  </span>
                  <Text variant="small" className="text-text-muted">couleur + soulignement</Text>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <span className="p-2 text-sm font-medium text-text-secondary">
                    Lien inactif
                  </span>
                  <Text variant="small" className="text-text-muted">neutre, sans indicateur</Text>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Attribut <Text as="span" variant="code">aria-current</Text>
              </Text>
              <Text variant="small" className="text-text-muted">
                <Text as="span" variant="code">aria-current="page"</Text> est appliqué
                sur le lien dont le <Text as="span" variant="code">href</Text> correspond
                exactement au pathname courant via <Text as="span" variant="code">usePathname()</Text>.
                Les AT annoncent "page courante" à la lecture du lien.
              </Text>
            </div>

          </div>
        </section>

        {/* ── SECTION 5 : REDUCED MOTION ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Reduced Motion</Heading>
            <Text variant="small">
              Toutes les animations de la navbar respectent la préférence système
              {' '}<Text as="span" variant="code">prefers-reduced-motion</Text> via
              la classe Tailwind <Text as="span" variant="code">motion-reduce:transition-none</Text>.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Panneau mobile
              </Text>
              <Text as="span" variant="code" className="w-fit text-xs">
                transition-transform duration-300 motion-reduce:transition-none
              </Text>
              <Text variant="small" className="text-text-muted">
                L'animation de glissement est désactivée si l'utilisateur
                a activé "Réduire les animations" dans son système.
              </Text>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Flèche dropdown
              </Text>
              <Text as="span" variant="code" className="w-fit text-xs">
                [&_svg]:motion-safe:transition-transform
              </Text>
              <Text variant="small" className="text-text-muted">
                La rotation de l'icône chevron n'est animée que si les animations
                sont autorisées par le système.
              </Text>
            </div>
          </div>
        </section>

        {/* ── A11Y ── */}
        <A11yReference
          keyboard={[
            { keys: "Tab / Maj+Tab", action: "Parcours séquentiel : logo, Accueil, puis un arrêt par bouton de sous-menu. Les liens d'un sous-menu fermé n'ont aucun arrêt (`inert`, test). Pas de flèches : c'est le pattern Disclosure, pas Menubar." },
            { keys: "Entrée / Espace", action: "Sur un bouton de sous-menu : ouvre ou ferme (mesuré). Tab suivant : premier lien du sous-menu." },
            { keys: "Échap", action: "Ferme le sous-menu ouvert et rend le focus à son bouton ; ferme le menu mobile et rend le focus au burger (tests, mesuré dans Chromium)." },
            { keys: "Tab hors du sous-menu", action: "Ferme le sous-menu quand le focus en sort (`onBlurCapture`, mesuré)." },
          ]}
          aria={[
            { name: "nav aria-label", description: "Deux `nav` : « Navigation principale » (visible dès `md`) et « Navigation principale mobile ». L'autre est en `display: none` selon la largeur, donc un seul est exposé à la fois (mesuré à 1280 px)." },
            { name: "Bouton de sous-menu", description: "Vrai `<button>` avec `aria-expanded` et `aria-controls` vers la liste (test). La liste fermée est `inert` et `hidden`. Pas de `role=\"menu\"` : volontaire, ce n'est pas un menu d'application." },
            { name: "Burger", description: "`aria-label` « Ouvrir / Fermer le menu de navigation » selon l'état, `aria-expanded`, `aria-controls=\"mobile-menu\"`, icône SVG `aria-hidden`. Le `span` sr-only « Menu » est écrasé par l'`aria-label` : redondant. Couvert par un test." },
            { name: "Panneau mobile", description: "`inert` + `aria-hidden` quand il est fermé, retirés à l'ouverture (test, mesuré). `inert` suffit à retirer les liens du clavier ; `aria-hidden` est redondant." },
            { name: "aria-current=\"page\"", description: "Sur le lien de la page courante, dans un sous-menu comme au premier niveau (test). Le bouton d'un sous-menu qui contient la page courante est seulement coloré et souligné : l'état n'est pas exposé aux technologies d'assistance." },
          ]}
          wcag={[
            { criterion: "2.1.1 Clavier", level: "A", how: "Tout se fait au clavier : ouvrir, parcourir, fermer (mesuré)." },
            { criterion: "2.1.2 Pas de piège au clavier", level: "A", how: "Le menu mobile se ferme avec Échap. Voir les limites : le piège à focus laisse en plus sortir le focus vers la page cachée." },
            { criterion: "2.4.7 Focus visible", level: "AA", how: "Anneau de 3 px blanc puis 2 px `#3730a3` mesuré sur le burger et sur le lien Accueil. Contraste de l'anneau non mesuré." },
            { criterion: "1.4.3 Contraste (minimum)", level: "AA", how: "Texte des liens de 7,56 à 9,93, logo 17,74 (mesuré dans Chromium)." },
            { criterion: "2.5.8 Taille de la cible (minimum)", level: "AA", how: "Mesuré : Accueil 44 × 36 px, boutons de sous-menu 66 × 36 px et plus, burger 36 × 24 px (juste au seuil de 24 px)." },
            { criterion: "2.3.3 Animation à partir des interactions", level: "AAA", how: "Le panneau mobile a `motion-reduce:transition-none` ; mesure avec `prefers-reduced-motion` : la propriété de transition passe à `none`." },
            { criterion: "1.4.10 Redistribution", level: "AA", how: "Pas de défilement horizontal à 320 px (mesuré)." },
          ]}
          limits={[
            "Piège à focus du menu mobile : `useFocusTrap` prend le dernier élément de `querySelectorAll`, qui est un lien caché d'un sous-menu fermé. Mesuré : depuis « Global UI », Tab sort du menu vers le fil d'Ariane (derrière le panneau), puis vers le lien d'évitement. À corriger.",
            "Les `id` des sous-menus (`dropdown-atomes`, etc.) sont en double, car `NavLinks` est monté deux fois (desktop et mobile) : `aria-controls` du bouton mobile pointe vers la liste du menu desktop (mesuré). À corriger, par exemple avec `useId`.",
            "La liste interne porte aussi `aria-label=\"Navigation principale\"`, comme son `nav` : le nom est redondant (déduit du code).",
            "À l'ouverture du menu mobile, le focus reste sur le burger : il n'est pas déplacé vers le premier lien (mesuré).",
            "Échap avec un sous-menu ouvert dans le menu mobile ferme les deux d'un coup (mesuré).",
            "Burger : 36 × 24 px, juste au seuil de WCAG 2.5.8 ; contraste de l'anneau de focus non mesuré.",
            "Test manuel avec lecteur d'écran (annonce de l'état des boutons, de la page courante) : à faire.",
          ]}
        />

      </div>
    </div>
  );
}