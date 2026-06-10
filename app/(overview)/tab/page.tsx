import type { Metadata } from 'next';
import { Heading } from "@/app/ui/components/heading";
import { Text } from "@/app/ui/components/text";
import { title } from 'process';
import { Tab } from '@/app/ui/components/Tab/tab';

export const metadata: Metadata = {
  title: 'Composant Tab',
  description: 'Démonstration du composant Tab : tablist, tab, tabpanel, Roving Tabindex.',
};

export default function TabDemoPage(){

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">
            
            {/* Header */}
            <div className="text-center">
                <Heading as="h1">Tab</Heading>
                <Text variant="lead" className="font-bold text-primary">
                Tab accessibles
                </Text>
            </div>

            <Tab
                title="Mon composant"
                sections={[
                    { title: "Onglet 1", content: <p>Contenu 1</p>, isActive: true },
                    { title: "Onglet 2", content: <p>Contenu 2</p>, isActive: true },
                    { title: "Désactivé", content: <p>…</p>, disabled: true },
                ]}
                />
        </div>
    )
}