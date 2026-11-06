import { Badge } from '@/app/ui/components/badge';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { A11yReference } from '../_components/A11yReference';
import { Metadata } from 'next';
import {
  faTriangleExclamation,
  faRocket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Composant Badge',
  description: 'Démonstration du composant Badge : indicateurs de statut accessibles conformes.',
};

export default function BadgeDemoPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

      {/* Header */}
      <div className="text-center">
        <Heading as="h1">Badge</Heading>
        <Text variant="lead" className="font-bold text-primary">Indicateurs de statut accessibles</Text>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-16">

        {/* SECTION 1 : VARIANTES */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Variantes sémantiques</Heading>
            <Text variant="small">
              Chaque variante combine couleur et icône pour transmettre l'information
              sans reposer uniquement sur la couleur.
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Badge variant="success">Succès</Badge>
            <Badge variant="danger">Erreur</Badge>
            <Badge variant="warning">Avertissement</Badge>
            <Badge variant="info">Information</Badge>
            <Badge variant="neutral">Neutre</Badge>
          </div>
        </section>

        {/* SECTION 2 : ICÔNE SEULE */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Icône seule</Heading>
            <Text variant="small">
              Sans label visible, le <Text as="span" variant="code">srText</Text> est obligatoire
              pour que les lecteurs d'écran comprennent le statut.
            </Text>
          </div>

          <div className="flex flex-wrap gap-6 p-6 sm:p-8 bg-bg-subtle/30 rounded-3xl border border-border-subtle justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <Badge variant="success" srText="Déploiement réussi" icon={faRocket} />
              <Text variant="caption" className="text-text-muted">Déploiement</Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="warning" srText="Attention requise" icon={faTriangleExclamation} />
              <Text variant="caption" className="text-text-muted">Attention</Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="info" srText="Nouveauté disponible" icon={faStar} />
              <Text variant="caption" className="text-text-muted">Nouveauté</Text>
            </div>
          </div>
        </section>

        {/* SECTION 3 : ICÔNE PERSONNALISÉE */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Icône personnalisée</Heading>
            <Text variant="small">La prop <Text as="span" variant="code">icon</Text> remplace l'icône par défaut.</Text>
          </div>
          <div className="flex flex-wrap justify-center gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
            <Badge variant="info" icon={faStar}>Personnalisé</Badge>
            <Badge variant="warning" icon={faTriangleExclamation}>Avertissement</Badge>
            <Badge variant="success" icon={faRocket}>Succès</Badge>
          </div>
        </section>

        {/* SECTION 4 : CAS D'USAGE RÉELS */}
        <section className="flex flex-col gap-8 border-b pb-12">
          <div className="space-y-1">
            <Heading as="h2" level={2}>Cas d'usage</Heading>
            <Text variant="small">Exemples d'intégration dans des contextes concrets.</Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* Statuts utilisateur */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">Statut utilisateur</Text>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success">En ligne</Badge>
                <Badge variant="neutral">Inactif</Badge>
                <Badge variant="danger">Banni</Badge>
              </div>
            </div>

            {/* Étiquettes de contenu */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">Étiquettes de contenu</Text>
              <div className="flex flex-wrap gap-3">
                <Badge variant="info">Nouveau</Badge>
                <Badge variant="warning">Bêta</Badge>
                <Badge variant="success">Stable</Badge>
                <Badge variant="danger">Déprécié</Badge>
              </div>
            </div>

            {/* Résultats de validation */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">Validation</Text>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success">Champ valide</Badge>
                <Badge variant="danger">Champ invalide</Badge>
                <Badge variant="warning">Optionnel</Badge>
              </div>
            </div>

            {/* Priorités */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
              <Text variant="caption" className="font-bold text-text-muted">Priorités</Text>
              <div className="flex flex-wrap gap-3">
                <Badge variant="danger">Urgent</Badge>
                <Badge variant="warning">Moyen</Badge>
                <Badge variant="info">Faible</Badge>
                <Badge variant="neutral">En attente</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* A11Y */}
        <A11yReference
          keyboard={[
            { keys: "Aucune", action: "Le Badge n'est pas interactif : il n'est pas dans l'ordre de tabulation et n'a aucune touche propre. Pour déclencher une action, utilise un `Button`." },
          ]}
          aria={[
            { name: "role=\"status\"", description: "Posé sur chaque Badge : c'est une région live polie. La page de démo en compte 26 (mesuré dans Chromium). Voir les limites." },
            { name: "aria-hidden sur l'icône", description: "L'icône est décorative : elle est toujours masquée aux lecteurs d'écran." },
            { name: "aria-hidden sur le texte visible + sr-only", description: "Le texte affiché est masqué ; un texte `sr-only` le remplace : « Préfixe : texte », ou la prop `srText` si elle est fournie. Couvert par un test." },
            { name: "prop srText", description: "Obligatoire pour un Badge avec icône seule (imposé par TypeScript) : sans elle, le Badge n'aurait aucun nom. Couvert par un test." },
          ]}
          wcag={[
            { criterion: "1.4.1 Utilisation de la couleur", level: "A", how: "Le sens est porté par le texte et l'icône, pas par la couleur seule." },
            { criterion: "1.4.3 Contraste (minimum)", level: "AA", how: "Texte blanc de 12 px en gras sur le fond : 7,68 (success), 6,47 (danger), 5,02 (warning), 5,93 (info), 10,31 (neutral), tous au-dessus de 4,5. Calculé depuis les couleurs affichées dans Chromium." },
            { criterion: "1.1.1 Contenu non textuel", level: "A", how: "Icône décorative masquée ; le sens est dans le texte. Un Badge à icône seule exige `srText` (TypeScript)." },
            { criterion: "4.1.2 Nom, rôle et valeur", level: "A", how: "Le texte `sr-only` donne le contenu ; le rôle `status` est discutable pour un Badge statique (voir les limites)." },
          ]}
          limits={[
            "`role=\"status\"` fait de chaque Badge une région live. Pour un Badge statique, ce n'est pas nécessaire et ça multiplie les régions. Il ne se justifie que si le texte change dynamiquement. Non testé avec un lecteur d'écran.",
            "Le texte lu est construit avec le premier enfant converti en chaîne : un enfant qui est un élément React (ex. `<strong>Validé</strong>`) donne « Success : [object Object] » (vérifié en test). Passe du texte brut, ou `srText`.",
            "Seul le contraste texte/fond est mesuré. Le contraste de l'icône (1.4.11) n'est pas mesuré.",
            "Test manuel avec lecteur d'écran (NVDA, VoiceOver) : à faire.",
          ]}
        />

      </div>
    </div>
  );
}