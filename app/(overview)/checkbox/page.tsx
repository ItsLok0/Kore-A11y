import { Checkbox } from '@/app/ui/components/Checkbox/checkbox';
import { CheckboxGroup } from '@/app/ui/components/Checkbox/checkboxGroup';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
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
                description="Optionnel — décochez à tout moment."
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

        {/* ── A11Y ── */}
        <section className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8">
          <Heading as="h2" level={4} className="mb-4 italic text-primary">
            Note accessibilité
          </Heading>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Label imbriqué
              </Text>
              <Text variant="small">
                L'input est imbriqué dans le <Text as="span" variant="code">label</Text>{' '}
                pour une liaison implicite. La zone de clic englobe le texte
                entier, améliorant l'ergonomie sur mobile.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Fieldset & Legend
              </Text>
              <Text variant="small">
                Le groupe utilise les balises sémantiques{' '}
                <Text as="span" variant="code">fieldset</Text> +{' '}
                <Text as="span" variant="code">legend</Text>. Indispensable pour que
                les AT lisent le contexte avant chaque option.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Messages d'erreur
              </Text>
              <Text variant="small">
                Les erreurs sont annoncées via{' '}
                <Text as="span" variant="code">aria-live="polite"</Text>. Le champ
                porte <Text as="span" variant="code">aria-invalid="true"</Text> et{' '}
                <Text as="span" variant="code">aria-describedby</Text> pointe vers
                le message.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Champ obligatoire
              </Text>
              <Text variant="small">
                L'astérisque visuel est en{' '}
                <Text as="span" variant="code">aria-hidden="true"</Text>. L'attribut
                natif <Text as="span" variant="code">required</Text> porte
                l'information pour les technologies d'assistance.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}