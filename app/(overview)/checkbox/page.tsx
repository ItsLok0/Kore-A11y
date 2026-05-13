import { Checkbox } from '@/app/ui/components/Checkbox/checkbox';
import { CheckboxGroup } from '@/app/ui/components/Checkbox/checkboxGroup';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Composants Checkbox',
    description: 'Démonstration des cases à cocher simples et groupées avec gestion de l\'accessibilité.',
};

export default function CheckboxDemoPage() {
    // Options pour le groupe
    const themeOptions = [
        { value: 'light', label: 'Mode Clair' },
        { value: 'dark', label: 'Mode Sombre', description: 'Recommandé pour réduire la fatigue oculaire.' },
        { value: 'system', label: 'Système' },
    ];

    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
            {/* Header */}
            <div className="text-center mb-10">
                <Heading as="h1">Cases à cocher</Heading>
                <Text variant="lead" className="text-primary font-bold">(Checkbox & CheckboxGroup)</Text>
            </div>

            <div className="w-full flex flex-col gap-16 max-w-4xl">
                
                {/* --- SECTION 1 : CHECKBOX SIMPLE --- */}
                <section className="flex flex-col gap-10">
                    <div className="space-y-1 border-b pb-2">
                        <Heading as="h2" level={2}>1. Checkbox Simple</Heading>
                        <Text variant="small">Utilisée pour des actions binaires ou des consentements isolés.</Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* États de base */}
                        <div className="flex flex-col gap-6">
                            <Heading as="h3" level={4} className="text-primary uppercase tracking-widest">États de base</Heading>
                            <Checkbox label="Option par défaut" />
                            <Checkbox label="Option cochée" defaultChecked />
                            <Checkbox 
                                label="Option avec description" 
                                description="Cette précision aide l'utilisateur à comprendre l'enjeu du choix."
                            />
                        </div>

                        {/* Cas Métiers (Validation) */}
                        <div className="flex flex-col gap-6">
                            <Heading as="h3" level={4} className="text-primary uppercase tracking-widest">Validation & RGPD</Heading>
                            <Checkbox 
                                label="J'accepte les CGU" 
                                required 
                            />
                            <Checkbox 
                                label="J'accepte de recevoir la newsletter" 
                                error
                                errorMessage="Vous devez accepter pour valider votre inscription."
                            />
                            <Checkbox 
                                label="Sauvegarder les préférences" 
                                disabled 
                                description="Action momentanément indisponible."
                            />
                        </div>
                    </div>

                    {/* Démo Tailles */}
                    <div className="flex flex-col gap-6 p-6 bg-bg-subtle/30 rounded-2xl border border-border-subtle">
                        <Heading as="h3" level={4} className="text-primary uppercase tracking-widest">Tailles</Heading>
                        <div className="flex flex-wrap gap-8 items-center">
                            <Checkbox label="Petit (sm)" size="sm" defaultChecked />
                            <Checkbox label="Moyen (md)" size="md" defaultChecked />
                            <Checkbox label="Grand (lg)" size="lg" defaultChecked />
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2 : CHECKBOX GROUP --- */}
                <section className="flex flex-col gap-10">
                    <div className="space-y-1 border-b pb-2">
                        <Heading as="h2" level={2}>2. Checkbox Group</Heading>
                        <Text variant="small">Pour sélectionner plusieurs options dans une liste sémantique.</Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <CheckboxGroup 
                            legend="Préférences d'affichage"
                            description="Sélectionnez vos modes préférés."
                            name="display-modes"
                            options={themeOptions}
                        />

                        <div className="space-y-6">
                            <CheckboxGroup 
                                legend="Sélection requise"
                                name="required-group"
                                required
                                error
                                errorMessage="Choisissez au moins une option."
                                options={[
                                    { value: 'opt1', label: 'Option A' },
                                    { value: 'opt2', label: 'Option B' }
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* Note Technique finale */}
                <section className="mt-10 p-8 bg-primary-subtle rounded-2xl border border-border-subtle">
                    <div className="flex flex-col gap-4">
                        <Heading as="h3" level={4} className="text-primary italic">Expertise A11y & Structure</Heading>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Text className="font-bold">Checkbox Simple :</Text>
                                <Text variant="small">
                                    L'input est **imbriqué** dans le label pour une liaison implicite parfaite. 
                                    La zone de clic est optimisée (User Experience).
                                </Text>
                            </div>
                            <div className="space-y-2">
                                <Text className="font-bold">Checkbox Group :</Text>
                                <Text variant="small">
                                    Utilise les balises sémantiques **fieldset** et **legend**. 
                                    Indispensable pour que les lecteurs d'écran lisent le contexte du groupe.
                                </Text>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}