import { Checkbox } from '@/app/ui/components/Checkbox/checkbox';
import { CheckboxGroup } from '@/app/ui/components/Checkbox/checkboxGroup';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { A11yReference } from '../_components/A11yReference';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Composants Checkbox',
  description: 'Démonstration des cases à cocher simples et groupées avec gestion de l\'accessibilité.',
};

export default function CheckboxDemoPage() {
  const themeOptions = [
    { value: 'light', label: 'Mode Clair' },
    { value: 'dark', label: 'Mode Sombre', description: 'Recommandé pour réduire la fatigue oculaire.' },
    { value: 'system', label: 'Système' },
  ];

  const notifOptions = [
    { value: 'email', label: 'Email', description: 'Recevoir les alertes par email.' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Notifications push' },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Cases à cocher</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Checkbox & CheckboxGroup accessibles
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* ── SECTION 1 : ÉTATS DE BASE ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>États de base</Heading>
            <Text variant="small">
              Les états fondamentaux d'une checkbox isolée : par défaut,
              cochée, avec description.
            </Text>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Checkbox label="Option par défaut" />
            <Checkbox label="Option cochée par défaut" defaultChecked />
            <Checkbox
              label="Option avec description"
              description="Cette précision aide l'utilisateur à comprendre l'enjeu du choix."
            />
          </div>
        </section>

        {/* ── SECTION 2 : TAILLES ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Tailles</Heading>
            <Text variant="small">
              3 tailles disponibles via la prop <Text as="span" variant="code">size</Text>.
              La taille <Text as="span" variant="code">md</Text> est celle par défaut.
            </Text>
          </div>
          <div className="flex flex-wrap items-center gap-8 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Checkbox label="Petit (sm)" size="sm" defaultChecked />
            <Checkbox label="Moyen (md)" size="md" defaultChecked />
            <Checkbox label="Grand (lg)" size="lg" defaultChecked />
          </div>
        </section>

        {/* ── SECTION 3 : ÉTATS SPÉCIAUX ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>États spéciaux</Heading>
            <Text variant="small">
              Les états <Text as="span" variant="code">error</Text>,{' '}
              <Text as="span" variant="code">disabled</Text> et{' '}
              <Text as="span" variant="code">required</Text> communiqués visuellement
              et aux technologies d'assistance.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Erreur — <Text as="span" variant="code">error</Text>
              </Text>
              <Checkbox
                label="J'accepte de recevoir la newsletter"
                error
                errorMessage="Vous devez accepter pour continuer."
              />
              <Text variant="small" className="text-text-muted">
                <Text as="span" variant="code">aria-invalid="true"</Text> +{' '}
                <Text as="span" variant="code">aria-describedby</Text> lié au message.
                L'erreur est annoncée via{' '}
                <Text as="span" variant="code">aria-live="polite"</Text>.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Obligatoire — <Text as="span" variant="code">required</Text>
              </Text>
              <Checkbox
                label="J'accepte les CGU"
                required
              />
              <Text variant="small" className="text-text-muted">
                L'astérisque visuel est en{' '}
                <Text as="span" variant="code">aria-hidden="true"</Text>. L'attribut
                natif <Text as="span" variant="code">required</Text> porte l'information
                pour les AT.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Désactivé — <Text as="span" variant="code">disabled</Text>
              </Text>
              <Checkbox
                label="Sauvegarder les préférences"
                disabled
                description="Action momentanément indisponible."
              />
              <Text variant="small" className="text-text-muted">
                L'attribut natif <Text as="span" variant="code">disabled</Text> retire
                l'élément de l'ordre de tabulation et signale l'état aux AT.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Cas métier — RGPD
              </Text>
              <Checkbox label="J'accepte les CGU" required />
              <Checkbox label="J'accepte la politique de confidentialité" required />
              <Checkbox
                label="Je souhaite recevoir les offres partenaires"
                description="Optionnel, décochez à tout moment."
              />
            </div>

          </div>
        </section>

        {/* ── SECTION 4 : CHECKBOX GROUP ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Checkbox Group</Heading>
            <Text variant="small">
              Pour sélectionner plusieurs options dans une liste sémantique.
              Utilise <Text as="span" variant="code">fieldset</Text> +{' '}
              <Text as="span" variant="code">legend</Text> pour que les lecteurs
              d'écran lisent le contexte du groupe.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Groupe standard
              </Text>
              <CheckboxGroup
                legend="Préférences d'affichage"
                description="Sélectionnez vos modes préférés."
                name="display-modes"
                options={themeOptions}
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Groupe avec erreur
              </Text>
              <CheckboxGroup
                legend="Sélection requise"
                name="required-group"
                required
                error
                errorMessage="Choisissez au moins une option."
                options={[
                  { value: 'opt1', label: 'Option A' },
                  { value: 'opt2', label: 'Option B' },
                  { value: 'opt3', label: 'Option C' },
                ]}
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:col-span-2">
              <Text variant="caption" className="font-bold text-text-muted">
                Cas métier — Notifications
              </Text>
              <CheckboxGroup
                legend="Canaux de notification"
                description="Choisissez comment vous souhaitez être notifié."
                name="notifications"
                options={notifOptions}
              />
            </div>

          </div>
        </section>

        {/* ── RÉFÉRENCE A11Y ── */}
        <A11yReference
          keyboard={[
            { keys: "Tab / Maj+Tab", action: "Place le focus sur chaque case, une par une (pas de navigation aux flèches : c'est le comportement attendu pour des cases à cocher)." },
            { keys: "Espace", action: "Coche ou décoche la case. Couvert par un test sur `Checkbox`." },
            { keys: "Clic sur le label", action: "Coche ou décoche la case : le `label` englobe tout le texte. Couvert par un test." },
          ]}
          aria={[
            { name: "input type=\"checkbox\"", description: "Élément natif : le rôle « checkbox » et l'état coché viennent du HTML." },
            { name: "label imbriqué", description: "L'`input` est dans le `label` : liaison implicite, sans `id` à gérer, et zone cliquable étendue au texte." },
            { name: "fieldset / legend", description: "`CheckboxGroup` : le groupe est exposé avec le rôle « group », nommé par sa légende. Couvert par un test." },
            { name: "aria-describedby", description: "`Checkbox` : description puis erreur. `CheckboxGroup` : posé sur le `fieldset`, avec la description du groupe puis l'erreur. Couvert par des tests." },
            { name: "aria-invalid", description: "`true` sur la case (ou sur chaque case du groupe) quand `error` est actif. Couvert par des tests." },
            { name: "required", description: "`Checkbox` : attribut natif, astérisque visuel en `aria-hidden=\"true\"`. `CheckboxGroup` : astérisque masqué et texte `sr-only` « (obligatoire) » dans la légende (couvert par un test)." },
            { name: "aria-live=\"polite\"", description: "Le message d'erreur est rendu dans une région live, pour être annoncé à son apparition." },
          ]}
          wcag={[
            { criterion: "1.3.1 Info et relations", level: "A", how: "Case reliée à son label par imbrication ; cases d'un groupe regroupées par `fieldset` et `legend`." },
            { criterion: "4.1.2 Nom, rôle et valeur", level: "A", how: "Case native : rôle et état coché natifs, nom issu du label (tests : `getByRole` avec `name`)." },
            { criterion: "2.1.1 Clavier", level: "A", how: "Opérable au clavier grâce à l'`input` natif ; Espace testé." },
            { criterion: "3.3.1 Identification des erreurs", level: "A", how: "L'erreur est un message texte relié à la case ou au groupe, avec `aria-invalid`." },
            { criterion: "1.4.1 Utilisation de la couleur", level: "A", how: "L'erreur n'est pas portée par la couleur seule : bordure et texte rouges, plus un message texte." },
            { criterion: "2.4.7 Focus visible", level: "AA", how: "Anneau `--focus-ring` sur `:focus-visible`, avec un contour spécifique pour Safari. Rendu et contraste non mesurés." },
            { criterion: "2.5.8 Taille de la cible (minimum)", level: "AA", how: "La case seule fait 14 px (`sm`), 16 px (`md`) ou 20 px (`lg`), sous 24 px ; mais le `label` entier est cliquable et mesure au moins 24 px de haut (mesuré dans Chromium)." },
          ]}
          limits={[
            "La description est dans le `label` : elle fait partie du nom accessible (mesuré dans Chromium : « Mode Sombre Recommandé pour réduire la fatigue oculaire. »). Sur `Checkbox`, elle figure aussi dans `aria-describedby` : un lecteur d'écran peut donc la lire deux fois. Non testé avec NVDA ni VoiceOver.",
            "Le `required` de `CheckboxGroup` est informatif : les cases n'ont pas l'attribut `required` et rien n'empêche l'envoi sans choix. La validation « au moins une case » reste à écrire côté formulaire.",
            "Le message d'erreur par défaut est « Ce champ est obligatoire. », quelle que soit la cause : passe toujours `errorMessage`.",
            "`CheckboxGroup` utilise `text-slate-900` et `text-secondary` (gris #6B7280) pour le texte des options, alors que `Checkbox` utilise les jetons `text-text-primary` et `text-text-secondary` : incohérence à corriger, contraste non mesuré (1.4.3, 1.4.11).",
            "`CheckboxGroup` n'a pas de test pour une case cochée au clavier ; les tests clavier portent sur `Checkbox`.",
            "Test manuel avec lecteur d'écran (NVDA, VoiceOver) : à faire.",
          ]}
        />

      </div>
    </div>
  );
}