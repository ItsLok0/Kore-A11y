import { Input } from '@/app/ui/components/input';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { TextArea } from '@/app/ui/components/textarea';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Composants de saisie',
  description: 'Démonstration des composants Input et TextArea accessibles conformes RGAA.',
};

export default function InputDemoPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Champs de saisie</Heading>
        <Text variant="lead" className="font-bold text-primary">
          Input & TextArea accessibles
        </Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* ── SECTION 1 : TAILLES INPUT ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Tailles</Heading>
            <Text variant="small">
              3 tailles disponibles via la prop <Text as="span" variant="code">size</Text>.
              La taille <Text as="span" variant="code">md</Text> est celle par défaut.
            </Text>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Input label="Petit (sm)" size="sm" placeholder="Rechercher..." type="search" />
            <Input label="Standard (md)" size="md" placeholder="Jean Dupont" />
            <Input label="Grand (lg)" size="lg" placeholder="06 12 34 56 78" type="tel" />
          </div>
        </section>

        {/* ── SECTION 2 : TYPES D'INPUT ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Types natifs</Heading>
            <Text variant="small">
              La prop <Text as="span" variant="code">type</Text> accepte tous les types HTML
              sauf <Text as="span" variant="code">checkbox</Text>, <Text as="span" variant="code">radio</Text>,{' '}
              <Text as="span" variant="code">file</Text> et <Text as="span" variant="code">range</Text> —
              couverts par des composants dédiés.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:grid-cols-2 sm:p-8">
            <Input label="Texte" type="text" placeholder="Jean Dupont" />
            <Input label="Email" type="email" placeholder="jean@exemple.fr" />
            <Input label="Mot de passe" type="password" placeholder="••••••••" />
            <Input label="Téléphone" type="tel" placeholder="06 12 34 56 78" />
            <Input label="Recherche" type="search" placeholder="Rechercher..." />
            <Input label="Date" type="date" />
          </div>
        </section>

        {/* ── SECTION 3 : ÉTATS INPUT ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>États</Heading>
            <Text variant="small">
              Les états <Text as="span" variant="code">error</Text>,{' '}
              <Text as="span" variant="code">disabled</Text> et <Text as="span" variant="code">required</Text> sont
              communiqués visuellement et aux technologies d'assistance.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Erreur — <Text as="span" variant="code">error</Text>
              </Text>
              <Input
                label="Mot de passe"
                type="password"
                required
                error
                errorMessage="8 caractères minimum."
                defaultValue="123"
              />
              <Text variant="small" className="text-text-muted">
                <Text as="span" variant="code">aria-invalid="true"</Text> +{' '}
                <Text as="span" variant="code">aria-describedby</Text> lié au message d'erreur.
                L'erreur est annoncée via <Text as="span" variant="code">aria-live="polite"</Text>.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Désactivé — <Text as="span" variant="code">disabled</Text>
              </Text>
              <Input label="Champ désactivé" disabled placeholder="Non modifiable" />
              <Text variant="small" className="text-text-muted">
                L'attribut natif <Text as="span" variant="code">disabled</Text> retire le champ
                de l'ordre de tabulation et signale l'état aux lecteurs d'écran.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Obligatoire — <Text as="span" variant="code">required</Text>
              </Text>
              <Input
                label="Email"
                type="email"
                required
                placeholder="jean@exemple.fr"
              />
              <Text variant="small" className="text-text-muted">
                L'astérisque est masqué aux lecteurs d'écran via{' '}
                <Text as="span" variant="code">aria-hidden="true"</Text>. L'attribut natif{' '}
                <Text as="span" variant="code">required</Text> porte l'information.
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Avec description — <Text as="span" variant="code">description</Text>
              </Text>
              <Input
                label="Nom d'utilisateur"
                description="Lettres et chiffres uniquement, 3 à 20 caractères."
                placeholder="jdupont42"
              />
              <Text variant="small" className="text-text-muted">
                La description est liée via <Text as="span" variant="code">aria-describedby</Text>.
                Elle est masquée en <Text as="span" variant="code">sr-only</Text> si une erreur
                est active.
              </Text>
            </div>

          </div>
        </section>

        {/* ── SECTION 4 : TEXTAREA FORMATS ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>TextArea — Formats</Heading>
            <Text variant="small">
              Hérite de toute la logique d'accessibilité de l'Input. Supporte
              les props natives <Text as="span" variant="code">rows</Text> et{' '}
              <Text as="span" variant="code">cols</Text>.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextArea
              label="Standard (md)"
              description="Maximum 500 caractères."
              placeholder="Votre message ici..."
            />
            <TextArea
              label="Grand format (lg)"
              size="lg"
              placeholder="Zone de texte large"
              rows={3}
            />
            <TextArea
              label="Petit format (sm)"
              size="sm"
              placeholder="Note courte..."
              rows={2}
            />
            <TextArea
              label="Non redimensionnable"
              rows={3}
              className="resize-none"
              placeholder="resize-none appliqué via className."
            />
          </div>
        </section>

        {/* ── SECTION 5 : TEXTAREA ÉTATS ── */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>TextArea — États</Heading>
            <Text variant="small">
              Mêmes états que l'Input : <Text as="span" variant="code">error</Text>,{' '}
              <Text as="span" variant="code">required</Text>, <Text as="span" variant="code">disabled</Text> et{' '}
              <Text as="span" variant="code">description</Text>.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Erreur
              </Text>
              <TextArea
                label="Message"
                required
                error
                errorMessage="Ce champ ne peut pas être vide."
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">
                Désactivé
              </Text>
              <TextArea
                label="Champ désactivé"
                disabled
                placeholder="Non modifiable"
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:col-span-2">
              <Text variant="caption" className="font-bold text-text-muted">
                Pleine largeur avec description
              </Text>
              <TextArea
                label="Note détaillée"
                rows={4}
                className="resize-none"
                description="Soyez le plus précis possible."
                placeholder="Décrivez ici les détails techniques..."
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
                Liaison label / champ
              </Text>
              <Text variant="small">
                Chaque champ est lié à son label via un <Text as="span" variant="code">id</Text>{' '}
                généré par <Text as="span" variant="code">useId()</Text>, garantissant
                l'unicité même avec plusieurs instances sur la même page.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Messages d'erreur
              </Text>
              <Text variant="small">
                Les erreurs sont annoncées via <Text as="span" variant="code">aria-live="polite"</Text> +{' '}
                <Text as="span" variant="code">role="alert"</Text>. Le champ porte{' '}
                <Text as="span" variant="code">aria-invalid="true"</Text> et{' '}
                <Text as="span" variant="code">aria-describedby</Text> pointe vers le message.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Champ obligatoire
              </Text>
              <Text variant="small">
                L'astérisque visuel est en <Text as="span" variant="code">aria-hidden="true"</Text>.
                L'attribut natif <Text as="span" variant="code">required</Text> porte
                l'information pour les technologies d'assistance.
              </Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">
                Description masquée en erreur
              </Text>
              <Text variant="small">
                Quand une erreur est active, la description passe en{' '}
                <Text as="span" variant="code">sr-only</Text> pour éviter la double
                annonce. L'erreur reste prioritaire dans{' '}
                <Text as="span" variant="code">aria-describedby</Text>.
              </Text>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}