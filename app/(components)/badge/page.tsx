import { Badge } from '@/app/ui/components/badge';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
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
        <section className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8">
          <Heading as="h2" level={4} className="mb-4 italic text-primary">Note accessibilité</Heading>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Couleur non exclusive</Text>
              <Text variant="small">L'information est toujours lisible sans perception des couleurs.</Text>
            </div>
            <div className="space-y-2">
              <Text className="text-sm font-bold underline">Lecteurs d'écran</Text>
              <Text variant="small">Utilisation de <Text as="span" variant="code">aria-hidden</Text>, <Text as="span" variant="code">sr-only</Text> et <Text as="span" variant="code">role="status"</Text>.</Text>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}