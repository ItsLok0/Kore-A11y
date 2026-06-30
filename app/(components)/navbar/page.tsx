import type { Metadata } from 'next';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';

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

        {/* ── NOTE A11Y ── */}
        <section className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8">
          <Heading as="h2" level={4} className="mb-4 italic text-primary">
            Note accessibilité
          </Heading>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Focus visible</Text>
              <Text variant="small">
                Double anneau de focus via <Text as="span" variant="code">--focus-ring</Text>{' '}
                (3px blanc / 5px primaire) sur tous les éléments interactifs :
                logo, liens, bouton burger.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Landmarks</Text>
              <Text variant="small">
                Deux landmarks <Text as="span" variant="code">&lt;nav&gt;</Text> distincts
                avec <Text as="span" variant="code">aria-label</Text> différents :
                "Navigation principale" (desktop) et "Navigation principale mobile".
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Focus trap</Text>
              <Text variant="small">
                Le menu mobile piège le focus dans le panneau tant qu'il est ouvert.
                <Text as="span" variant="code">inert</Text> neutralise les liens
                masqués visuellement pour éviter un piège de focus invisible.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Pattern Disclosure</Text>
              <Text variant="small">
                Le dropdown suit le pattern Disclosure (et non Menubar) recommandé
                par l'APG W3C pour les navigations de sites vitrine. Navigation
                au <Text as="span" variant="code">Tab</Text> séquentiel, sans flèches.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}