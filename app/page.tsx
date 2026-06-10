import { Button } from '@/app/ui/components/Button/button';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { Input } from '@/app/ui/components/input';
import { Checkbox } from './ui/components/Checkbox/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ButtonLink } from '@/app/ui/components/Button/buttonlink';
import { Badge } from '@/app/ui/components/badge';
import { Card } from '@/app/ui/components/Card/card';
import { cn } from '@/lib/utils';

const atoms = [
    {
        title: 'Button',
        href: '/button',
        description: 'Actions accessibles avec états de focus renforcés.',
        preview: (
            <div className="flex flex-wrap gap-3 pointer-events-none" aria-hidden="true">
                <Button variant="primary" tabIndex={-1}>Valider</Button>
                <Button variant="outline" tabIndex={-1}>Annuler</Button>
                <Button variant="danger" tabIndex={-1}>Supprimer</Button>
            </div>
        ),
    },
    {
        title: 'Input',
        href: '/input',
        description: 'Champs de saisie avec liaison explicite label/champ et gestion des erreurs.',
        preview: (
            <div className="pointer-events-none" aria-hidden="true">
                <Input
                    label="Nom complet"
                    placeholder="Jean Dupont"
                    description="Utilisé pour votre profil public."
                    tabIndex={-1}
                />
            </div>
        ),
    },
    {
        title: 'Checkbox',
        href: '/checkbox',
        description: 'Cases à cocher avec rendu cross-browser cohérent et annonces AT.',
        preview: (
            <div className="flex flex-col gap-3 pointer-events-none" aria-hidden="true">
                <Checkbox label="J'accepte les CGU" defaultChecked tabIndex={-1} />
                <Checkbox
                    label="Recevoir la newsletter"
                    description="Une fois par mois."
                    tabIndex={-1}
                />
            </div>
        ),
    },
    {
        title: 'Badge',
        href: '/badge',
        description: 'Indicateurs d\'état combinant couleur et texte pour ne jamais transmettre l\'information par la couleur seule.',
        preview: (
            <div className="flex flex-wrap gap-2 pointer-events-none" aria-hidden="true">
                <Badge variant="success">Publié</Badge>
                <Badge variant="warning">En attente</Badge>
                <Badge variant="danger">Erreur</Badge>
                <Badge variant="info">Info</Badge>
            </div>
        ),
    },
];

export default function HomePage() {
    return (
        <>
            {/* PREMIERE SECTION */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

                    {/* Badge statut — couleur + texte, pas couleur seule (RGAA 3.1) */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle text-primary border border-primary/20">
                        <span className="flex h-2 w-2" aria-hidden="true">
                            <span className="inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <Text variant="caption" className="font-bold text-text-secondary">
                            Phase 3 en cours : Composants complexes (Patterns ARIA)
                        </Text>
                    </div>

                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold">
                        Kore <span className="text-primary">A11Y</span>
                    </Heading>

                    <Text variant="lead" className="max-w-2xl">
                        Une bibliothèque de composants pensée pour le RGAA.
                    </Text>

                    <div className="flex gap-4 mt-4">
                        <ButtonLink
                            href="https://github.com/ItsLok0/Kore-A11y"
                            target="_blank"
                            variant="outline"
                            iconRight={faArrowUpRightFromSquare}
                            aria-label="Dépôt GitHub (ouvre dans un nouvel onglet)"
                        >
                            Dépôt GitHub
                        </ButtonLink>
                    </div>
                </div>
            </section>

            {/* ROADMAP BANDEAU */}
            <section className="border-y-2 border-primary bg-bg-surface py-5">
                <div className="max-w-5xl mx-auto px-6">
                    <ol
                        aria-label="Progression du projet"
                        className="flex items-center justify-center sm:justify-around flex-wrap gap-6 md:gap-10"
                    >
                        <li className="flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-[10px] font-bold text-white"
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-3" />
                            </span>
                            <Text variant="small" className="font-bold text-success">
                                Phase 1 : Lancement
                                <span className="sr-only">, Terminé</span>
                            </Text>
                        </li>

                        <li className="flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-[10px] font-bold text-white"
                            >
                                <FontAwesomeIcon icon={faCheck} className="w-3" />
                            </span>
                            <Text variant="small" className="font-bold text-success">
                                Phase 2 : Atomes UI
                                <span className="sr-only">, Terminé</span>
                            </Text>
                        </li>

                        <li className="flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
                            >
                                3
                            </span>
                            <Text variant="small" className="font-bold text-primary">
                                Phase 3 : Patterns
                                <span className="sr-only">, En cours</span>
                            </Text>
                        </li>

                        <li className="flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle text-[10px] text-text-muted"
                            >
                                4
                            </span>
                            <Text variant="small" className="font-bold text-text-muted">
                                Phase 4 : Navigation
                                <span className="sr-only">, À venir</span>
                            </Text>
                        </li>

                        <li className="flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle text-[10px] text-text-muted"
                            >
                                5
                            </span>
                            <Text variant="small" className="font-bold text-text-muted">
                                Phase 5 : Audit
                                <span className="sr-only">, À venir</span>
                            </Text>
                        </li>
                    </ol>
                </div>
            </section>

            {/* SECTION ATOMES */}
            <section className="py-20 px-6 max-w-6xl mx-auto" aria-labelledby="section-atomes-title">
                <div className="mb-16 space-y-4">
                    <Heading as="h2" id="section-atomes-title" level={2} className="text-center">
                        Bibliothèque d'Atomes
                    </Heading>
                    <Text variant="body" className="text-text-secondary text-center md:px-32">
                        Les briques de base de l'interface. Chaque composant est pensé pour
                        la cohérence sémantique, le contraste et la navigation au clavier.
                    </Text>
                </div>
    
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" role="list">
                    {atoms.map((atom) => (
                        <li key={atom.href}>
                            <Card
                                href={atom.href}
                                title={atom.title}
                                titleLevel="h3"
                                className={cn(
                                    "flex flex-col gap-4 h-full",
                                    "p-6 rounded-2xl border border-border-subtle bg-bg-surface",
                                    "hover:border-primary hover:shadow-sm transition-shadow duration-200"
                                )}
                            >
                                {/* Aperçu visuel (non interactif) */}
                                <div className="rounded-xl border border-border-subtle bg-primary-subtle/30 p-4 min-h-25 flex items-center">
                                    {atom.preview}
                                </div>
    
                                {/* Métadonnées */}
                                <div className="flex flex-col gap-2 mt-4">
                                    <Text variant="small" className="text-text-secondary">
                                        {atom.description}
                                    </Text>
                                </div>
                            </Card>
                        </li>
                    ))}
                </ul>
            </section>

            {/* SECTION COMPLEXES */}
            <section
                className="py-20 px-6 bg-secondary-subtle border-t-2 border-primary"
                aria-labelledby="section-roadmap-title"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 space-y-2">
                        <Heading as="h2" id="section-roadmap-title" level={2}>
                            Prochaines Étapes
                        </Heading>
                        <Text variant="body" className="text-text-secondary">
                            Éléments en cours de conception et objectifs de conformité pour les phases 3 à 5.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        <article className="flex flex-col gap-4 p-6 border border-dashed border-border-subtle rounded-2xl bg-bg-surface/50">
                            <Text variant="caption" className="text-primary font-bold">
                                Phase 3 : Patterns ARIA
                            </Text>
                            {/* aria-label associe la liste à sa phase pour les lecteurs d'écran */}
                            <ul className="space-y-3 text-left" aria-label="Composants Phase 3">
                                <li><Text variant="small">Modales et Focus Trap</Text></li>
                                <li><Text variant="small">Tabs et navigation clavier</Text></li>
                                <li><Text variant="small">Tooltips et Popovers</Text></li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-4 p-6 border border-dashed border-border-subtle rounded-2xl bg-bg-surface/50">
                            <Text variant="caption" className="text-primary font-bold">
                                Phase 4 : Global UI
                            </Text>
                            <ul className="space-y-3 text-left" aria-label="Composants Phase 4">
                                <li><Text variant="small">Menu Burger accessible</Text></li>
                                <li><Text variant="small">Dark Mode Switcher</Text></li>
                                <li><Text variant="small">Breadcrumbs sémantiques</Text></li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-4 p-6 border border-dashed border-border-subtle rounded-2xl bg-bg-surface/50 sm:col-span-2 md:col-span-1">
                            <Text variant="caption" className="text-primary font-bold">
                                Phase 5 : Audit et Qualité
                            </Text>
                            <ul className="space-y-3 text-left" aria-label="Composants Phase 5">
                                <li><Text variant="small">Audit automatisé Axe-core</Text></li>
                                <li><Text variant="small">Tests lecteurs d'écran</Text></li>
                                <li><Text variant="small">Documentation A11y</Text></li>
                            </ul>
                        </article>

                    </div>
                </div>
            </section>
        </>
    );
}