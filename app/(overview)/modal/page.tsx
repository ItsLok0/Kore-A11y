import { Heading } from "@/app/ui/components/heading";
import { Text } from "@/app/ui/components/text";
import {
    BasicModalDemo,
    FormModalDemo,
    ConfirmModalDemo,
    DestructiveModalDemo,
} from "@/app/ui/components/Modal/modalDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Composant Modal",
    description: "Démonstration du composant Modal : dialog natif accessible avec focus trap et retour de focus.",
};

export default function ModalPage() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-10 p-3 sm:p-6">

            {/* Header */}
            <div className="text-center">
                <Heading as="h1">Modal</Heading>
                <Text variant="lead" className="font-bold text-primary">
                    Dialog natif accessible avec focus trap
                </Text>
            </div>

            <div className="flex w-full max-w-4xl flex-col gap-16">

                {/* ── SECTION 1 : BASIQUE ── */}
                <section className="flex flex-col gap-8 border-b pb-12">
                    <div className="space-y-1">
                        <Heading as="h2" level={2}>Ouverture & fermeture</Heading>
                        <Text variant="small">
                            La modale s'ouvre via <Text as="span" variant="code">showModal()</Text> —
                            le backdrop natif de <Text as="span" variant="code">&lt;dialog&gt;</Text> bloque
                            les interactions avec le reste de la page. Fermeture via le bouton,{" "}
                            <Text as="span" variant="code">Échap</Text>, ou un clic sur le backdrop.
                        </Text>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                        <BasicModalDemo />
                    </div>
                </section>

                {/* ── SECTION 2 : AVEC DESCRIPTION ── */}
                <section className="flex flex-col gap-8 border-b pb-12">
                    <div className="space-y-1">
                        <Heading as="h2" level={2}>Avec description</Heading>
                        <Text variant="small">
                            La prop <Text as="span" variant="code">description</Text> est liée
                            via <Text as="span" variant="code">aria-describedby</Text>. Les lecteurs
                            d'écran lisent le titre puis la description à l'ouverture.
                        </Text>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                        <FormModalDemo />
                    </div>
                </section>

                {/* ── SECTION 3 : CONFIRMATION ── */}
                <section className="flex flex-col gap-8 border-b pb-12">
                    <div className="space-y-1">
                        <Heading as="h2" level={2}>Confirmation</Heading>
                        <Text variant="small">
                            Pattern courant : deux actions (Confirmer / Annuler). Le focus
                            initial se pose sur le bouton secondaire pour éviter une
                            validation accidentelle.
                        </Text>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                        <ConfirmModalDemo />
                    </div>
                </section>

                {/* ── SECTION 4 : DESTRUCTIVE ── */}
                <section className="flex flex-col gap-8 border-b pb-12">
                    <div className="space-y-1">
                        <Heading as="h2" level={2}>Action destructrice</Heading>
                        <Text variant="small">
                            Le variant <Text as="span" variant="code">danger</Text> est réservé
                            aux actions irréversibles. Le bouton de confirmation est intentionnellement
                            non-focusé en premier pour forcer une action consciente.
                        </Text>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 rounded-3xl border border-border-subtle bg-bg-subtle/30 p-6 sm:p-8">
                        <DestructiveModalDemo />
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
                                &lt;dialog&gt; natif & top layer
                            </Text>
                            <Text variant="small">
                                <Text as="span" variant="code">showModal()</Text> place la modale
                                dans le top layer du navigateur — au-dessus de tout autre contenu,
                                sans z-index à gérer.{" "}
                                <Text as="span" variant="code">role="dialog"</Text> et{" "}
                                <Text as="span" variant="code">aria-modal="true"</Text> sont
                                implicites.
                            </Text>
                        </div>
                        <div className="space-y-2">
                            <Text className="text-sm font-bold underline">
                                Focus trap
                            </Text>
                            <Text variant="small">
                                La navigation clavier est contenue dans la modale tant qu'elle
                                est ouverte. À la fermeture, le focus retourne sur l'élément
                                déclencheur — conformément au{" "}
                                <Text as="span" variant="code">RGAA 12.8</Text>.
                            </Text>
                        </div>
                        <div className="space-y-2">
                            <Text className="text-sm font-bold underline">
                                Scroll lock
                            </Text>
                            <Text variant="small">
                                <Text as="span" variant="code">overflow: hidden</Text> est
                                appliqué sur <Text as="span" variant="code">body</Text> à
                                l'ouverture et restauré à la fermeture, évitant un double
                                scroll visuel.
                            </Text>
                        </div>
                        <div className="space-y-2">
                            <Text className="text-sm font-bold underline">
                                Fermeture Échap & backdrop
                            </Text>
                            <Text variant="small">
                                <Text as="span" variant="code">Échap</Text> est géré nativement
                                par <Text as="span" variant="code">&lt;dialog&gt;</Text> via
                                l'événement <Text as="span" variant="code">onClose</Text>. Le clic
                                sur le backdrop est détecté via{" "}
                                <Text as="span" variant="code">e.target === e.currentTarget</Text>.
                            </Text>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}