import { Input } from '@/app/ui/components/input';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { TextArea } from '@/app/ui/components/textarea';
import { A11yReference } from '../_components/A11yReference';
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
              <Text as="span" variant="code">file</Text> et <Text as="span" variant="code">range</Text>,
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

        {/* ── RÉFÉRENCE A11Y ── */}
        <A11yReference
          keyboard={[
            { keys: "Tab / Maj+Tab", action: "Place le focus sur le champ ; un champ `disabled` est ignoré." },
            { keys: "Entrée", action: "`Input` : peut soumettre le formulaire parent ; `TextArea` : saute une ligne (comportements natifs, sans test dédié)." },
          ]}
          aria={[
            { name: "label / htmlFor", description: "Chaque champ est relié à son label par un `id` généré avec `useId()`, unique même avec plusieurs instances. Le label est obligatoire (prop `label`). Couvert par un test." },
            { name: "aria-describedby", description: "Pointe vers la description, puis vers le message d'erreur s'il y en a un. Couvert par des tests." },
            { name: "aria-invalid", description: "`true` quand `error` est actif. Couvert par un test." },
            { name: "role=\"alert\"", description: "Posé sur le message d'erreur, placé dans une région `aria-live=\"polite\"`. Présence couverte par un test, annonce vocale non testée." },
            { name: "required", description: "L'attribut natif porte l'information ; l'astérisque visuel est en `aria-hidden=\"true\"`. Couvert par un test." },
          ]}
          wcag={[
            { criterion: "1.3.1 Info et relations", level: "A", how: "Label relié au champ ; description et erreur reliées par `aria-describedby` (tests : `getByLabelText`, `toHaveAccessibleDescription`)." },
            { criterion: "3.3.2 Étiquettes ou instructions", level: "A", how: "Label obligatoire (typage TypeScript) et description optionnelle." },
            { criterion: "3.3.1 Identification des erreurs", level: "A", how: "L'erreur est un message texte relié au champ, avec `aria-invalid`." },
            { criterion: "1.4.1 Utilisation de la couleur", level: "A", how: "L'erreur n'est pas portée par la couleur seule : un message texte l'accompagne." },
            { criterion: "4.1.3 Messages d'état", level: "AA", how: "Message d'erreur en `role=\"alert\"`. Annonce réelle à vérifier avec un lecteur d'écran." },
            { criterion: "2.4.7 Focus visible", level: "AA", how: "Anneau défini globalement sur `:focus-visible` (`--focus-ring`, ou `--focus-ring-error` si le champ a la classe `error`). Rendu et contraste non mesurés." },
            { criterion: "2.5.8 Taille de la cible (minimum)", level: "AA", how: "`Input` de taille `sm` : 2 rem de haut (32 px à la taille de police par défaut), au-dessus des 24 px requis." },
          ]}
          limits={[
            "En erreur, la description passe en `sr-only` : elle est masquée visuellement mais reste dans `aria-describedby`, donc toujours lue (vérifié : la description accessible contient la description puis l'erreur). Elle n'est pas retirée pour éviter une double annonce.",
            "La région `aria-live=\"polite\"` contient un `role=\"alert\"` : selon les lecteurs d'écran, l'erreur peut être annoncée deux fois. Non testé avec NVDA ni VoiceOver.",
            "Le message d'erreur par défaut est « Ce champ est obligatoire », quelle que soit la cause : passe toujours `errorMessage`.",
            "Pas d'`autocomplete` par défaut (1.3.5 Identifier la finalité de la saisie, AA) : à fournir via la prop pour les champs de données personnelles.",
            "`TextArea` reprend les mêmes mécanismes, mais n'est couvert que par 2 tests (axe, association label / description / erreur).",
            "Contraste du texte, des bordures, du placeholder et de l'état désactivé (`opacity-50`) : non mesuré (1.4.3, 1.4.11).",
            "Test manuel avec lecteur d'écran (NVDA, VoiceOver) : à faire.",
          ]}
        />

      </div>
    </div>
  );
}