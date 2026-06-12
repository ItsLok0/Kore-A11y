'use client';

import { Tooltip } from '@/app/ui/components/Tooltip_Popover/tooltip';
import { Popover } from '@/app/ui/components/Tooltip_Popover/popover';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { Button } from '@/app/ui/components/Button/button';
import { Badge } from '@/app/ui/components/badge';

export default function TooltipPopoverDemo () {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">
            {/* Header */}
            <div className="text-center">
            <Heading as="h1">Tooltip & Popover</Heading>
            <Text variant="lead" className="font-bold text-primary">
                Composants de superposition accessibles
            </Text>
            </div>
    
            <div className="flex w-full max-w-4xl flex-col gap-16">
    
            {/** TOOLTIP */}
            <section className="flex flex-col gap-8 border-b pb-12">
                <div className="space-y-1">
                <Heading as="h2" level={2}>Tooltip</Heading>
                <Text variant="small">
                    Information courte affichée au survol et au focus d'un élément interactif.
                    Déclenché après <Text as="span" variant="code">300ms</Text> pour éviter
                    les affichages accidentels.
                </Text>
                </div>
    
                {/* Placements */}
                <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                <Text variant="caption" className="font-bold text-text-muted">Placements</Text>
                <div className="flex flex-wrap items-center justify-center gap-4 py-8">
                    {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
                    <Tooltip key={placement} content={`Tooltip ${placement}`} placement={placement}>
                        <Button variant="outline">
                        {placement}
                        </Button>
                    </Tooltip>
                    ))}
                </div>
                </div>
    
                {/* Cas d'usage */}
                <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                <Text variant="caption" className="font-bold text-text-muted">Cas d'usage</Text>
                <div className="flex flex-wrap items-center gap-6">
    
                    <Tooltip content="Supprimer définitivement cet élément">
                    <Button variant="danger">Supprimer</Button>
                    </Tooltip>
    
                    <Tooltip content="Raccourci clavier : Ctrl+S">
                    <Button variant="primary">Enregistrer</Button>
                    </Tooltip>
    
                    <Tooltip content="Ce badge indique un statut actif">
                    <span className="inline-flex">
                        <Badge variant="success">Actif</Badge>
                    </span>
                    </Tooltip>
    
                </div>
                </div>
    
                {/* Délai personnalisé */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
                    <Text variant="caption" className="font-bold text-text-muted">
                    Délai par défaut — <Text as="span" variant="code">delay=300</Text>
                    </Text>
                    <Tooltip content="Apparaît après 300ms" delay={300}>
                    <Button variant="outline">Survolez-moi</Button>
                    </Tooltip>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6">
                    <Text variant="caption" className="font-bold text-text-muted">
                    Délai réduit — <Text as="span" variant="code">delay=0</Text>
                    </Text>
                    <Tooltip content="Apparaît immédiatement" delay={0}>
                    <Button variant="outline">Survolez-moi</Button>
                    </Tooltip>
                </div>
                </div>
            </section>
    
            {/** POPOVER */}
            <section className="flex flex-col gap-8 border-b pb-12">
                <div className="space-y-1">
                <Heading as="h2" level={2}>Popover</Heading>
                <Text variant="small">
                    Panneau flottant à contenu libre, déclenché au clic. Accepte n'importe quel{' '}
                    <Text as="span" variant="code">ReactNode</Text> dans la prop{' '}
                    <Text as="span" variant="code">content</Text>.
                </Text>
                </div>
    
                {/* Placements */}
                <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                <Text variant="caption" className="font-bold text-text-muted">Placements</Text>
                <div className="flex flex-wrap items-center justify-center gap-4 py-8">
                    {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
                    <Popover
                        key={placement}
                        placement={placement}
                        content={
                        <Text variant="small">Popover positionné en <strong>{placement}</strong>.</Text>
                        }
                    >
                        <Button variant="outline">{placement}</Button>
                    </Popover>
                    ))}
                </div>
                </div>
    
                {/* Cas d'usage — simple */}
                <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                <Text variant="caption" className="font-bold text-text-muted">
                    Contenu simple — sans <Text as="span" variant="code">isDialog</Text>
                </Text>
                <div className="flex flex-wrap items-start gap-6">
    
                    {/* Informatif */}
                    <Popover
                    placement="bottom"
                    content={
                        <div className="flex flex-col gap-2">
                        <Text className="text-sm font-semibold">Qu'est-ce que le RGAA ?</Text>
                        <Text variant="small">
                            Le Référentiel Général d'Amélioration de l'Accessibilité est le
                            cadre réglementaire français basé sur les WCAG 2.1.
                        </Text>
                        </div>
                    }
                    >
                    <Button variant="secondary">En savoir plus</Button>
                    </Popover>
    
                    {/* Profil */}
                    <Popover
                    placement="bottom"
                    content={
                        <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-fg text-sm font-bold">
                            MD
                            </div>
                            <div>
                            <Text className="text-sm font-semibold">Marie Dupont</Text>
                            <Text variant="small" className="text-text-muted">marie@exemple.fr</Text>
                            </div>
                        </div>
                        <hr className="border-border-subtle" />
                        <div className="flex flex-col gap-1">
                            <Button variant="ghost" size="sm" className="justify-start">Mon profil</Button>
                            <Button variant="ghost" size="sm" className="justify-start">Paramètres</Button>
                            <Button variant="danger" size="sm" className="justify-start">Déconnexion</Button>
                        </div>
                        </div>
                    }
                    >
                    <Button variant="outline">Mon compte</Button>
                    </Popover>
    
                </div>
                </div>
    
                {/* Cas d'usage — isDialog */}
                <div className="flex flex-col gap-4 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                <div className="space-y-1">
                    <Text variant="caption" className="font-bold text-text-muted">
                    Contenu complexe — avec <Text as="span" variant="code">isDialog</Text>
                    </Text>
                    <Text variant="small" className="text-text-muted">
                    Focus trap actif : <Text as="span" variant="code">Tab</Text> ne sort pas du panneau.
                    <Text as="span" variant="code"> Escape</Text> ferme et redonne le focus au trigger.
                    </Text>
                </div>
                <div className="flex flex-wrap items-start gap-6">
    
                    {/* Confirmation suppression */}
                    <Popover
                        placement="bottom"
                        isDialog
                        dialogTitle="Confirmer la suppression"
                        dialogDescription="Cette action est irréversible et ne peut pas être annulée."
                        content={(onClose) => (
                            <div className="flex gap-2 justify-end">
                                <Button variant="outline" size="sm" onClick={onClose}>Annuler</Button>
                                <Button variant="danger" size="sm">Supprimer</Button>
                            </div>
                        )}
                    >
                        <Button variant="danger">Supprimer</Button>
                    </Popover>
    
                    {/* Formulaire simple */}
                    <Popover
                        placement="bottom"
                        isDialog
                        dialogTitle="Modifier le nom"
                        dialogDescription="Ce nom sera visible par tous les membres de l'équipe."
                        content={(onClose) => (
                            <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="popover-name" className="text-sm font-medium text-text-primary">
                                Nouveau nom
                                </label>
                                <input
                                id="popover-name"
                                type="text"
                                placeholder="Mon projet"
                                className="rounded-md border border-border-subtle px-3 py-2 text-sm focus-visible:outline-none focus-visible:shadow-(--focus-ring)"
                                />
                            </div>
                            <div className="flex gap-2 justify-end">
                                <Button variant="outline" size="sm" onClick={onClose}>Annuler</Button>
                                <Button variant="primary" size="sm">Enregistrer</Button>
                            </div>
                            </div>
                        )}
                    >
                    <Button variant="secondary">Renommer</Button>
                    </Popover>
    
                    {/* Sans titre ni description */}
                    <Popover
                    placement="bottom"
                    isDialog
                    content={
                        <div className="flex flex-col gap-3">
                        <Text variant="small">
                            Mode <Text as="span" variant="code">isDialog</Text> sans titre ni description —
                            focus trap actif, pas d'en-tête affiché.
                        </Text>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">Action A</Button>
                            <Button variant="primary" size="sm">Action B</Button>
                        </div>
                        </div>
                    }
                    >
                    <Button variant="outline">Sans en-tête</Button>
                    </Popover>
    
                </div>
                </div>
            </section>
    
            {/** COMPARAISON TOOLTIP VS POPOVER */}
            <section className="flex flex-col gap-8 border-b pb-12">
                <div className="space-y-1">
                <Heading as="h2" level={2}>Tooltip vs Popover</Heading>
                <Text variant="small">
                    Les deux composants sont visuellement similaires mais servent des usages distincts.
                </Text>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-surface">
                <table className="w-full text-sm border-collapse">
                    <thead>
                    <tr className="border-b border-border-subtle bg-bg-subtle">
                        <th className="px-4 py-3 text-left font-semibold text-text-primary">Critère</th>
                        <th className="px-4 py-3 text-left font-semibold text-primary">Tooltip</th>
                        <th className="px-4 py-3 text-left font-semibold text-info">Popover</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                    {[
                        { critere: 'Contenu', tooltip: 'Texte court uniquement', popover: 'ReactNode libre' },
                        { critere: 'Déclencheur', tooltip: 'Hover + Focus', popover: 'Click' },
                        { critere: 'Fermeture', tooltip: 'Blur / MouseLeave / Escape', popover: 'Clic extérieur / Escape' },
                        { critere: 'Role ARIA', tooltip: 'tooltip', popover: 'Aucun (ou dialog si formulaire)' },
                        { critere: 'Éléments interactifs', tooltip: '❌ Jamais', popover: '✅ Oui' },
                        { critere: 'Focus trap', tooltip: '❌', popover: '⚠️ Si contenu complexe' },
                    ].map(({ critere, tooltip, popover }) => (
                        <tr key={critere}>
                        <td className="px-4 py-3 font-medium text-text-primary">{critere}</td>
                        <td className="px-4 py-3 text-text-secondary">{tooltip}</td>
                        <td className="px-4 py-3 text-text-secondary">{popover}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </section>
    
            {/* A11Y */}
            <section className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8">
                <Heading as="h2" level={4} className="mb-4 italic text-primary">
                Note accessibilité
                </Heading>
                <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                    <Text className="text-sm font-bold underline">Tooltip</Text>
                    <Text variant="small">
                    Le contenu apparaissant au survol doit être rejetable (<Text as="span" variant="code">Escape</Text>),
                    survolable (la souris peut atteindre le tooltip sans le fermer) et persistant
                    (reste visible jusqu'au blur ou mouseLeave). Ces trois critères sont couverts
                    par <Text as="span" variant="code">useHover</Text>, <Text as="span" variant="code">useFocus</Text> et{' '}
                    <Text as="span" variant="code">useDismiss</Text> de Floating UI.
                    </Text>
                </div>
                <div className="space-y-2">
                    <Text className="text-sm font-bold underline">Tooltip — Trigger focusable</Text>
                    <Text variant="small">
                    Le <Text as="span" variant="code">children</Text> du Tooltip doit toujours être
                    un élément interactif natif (<Text as="span" variant="code">button</Text>,{' '}
                    <Text as="span" variant="code">a</Text>). Un texte brut dans un{' '}
                    <Text as="span" variant="code">span</Text> non focusable ne satisfait pas
                    WCAG 2.1.1 — l'information ne serait pas accessible au clavier.
                    </Text>
                </div>
                <div className="space-y-2">
                    <Text className="text-sm font-bold underline">Popover — aria-expanded</Text>
                    <Text variant="small">
                    Le trigger porte <Text as="span" variant="code">aria-expanded</Text> et{' '}
                    <Text as="span" variant="code">aria-controls</Text> pour signaler l'état
                    du panneau aux technologies d'assistance. Le panneau est lié par son{' '}
                    <Text as="span" variant="code">id</Text> correspondant.
                    </Text>
                </div>
                <div className="space-y-2">
                    <Text className="text-sm font-bold underline">Popover — Contenu complexe</Text>
                    <Text variant="small">
                    Si le <Text as="span" variant="code">content</Text> contient un formulaire
                    ou plusieurs éléments interactifs, ajouter <Text as="span" variant="code">role="dialog"</Text>{' '}
                    et un focus trap. Sans focus trap, un utilisateur clavier peut sortir du
                    panneau sans le fermer — expérience dégradée pour les lecteurs d'écran.
                    </Text>
                </div>
                </div>
            </section>
    
            </div>
        </div>
    )
}