import { Heading } from "@/app/ui/components/heading";
import { Text } from "@/app/ui/components/text";
import {
    BasicModalDemo,
    FormModalDemo,
    ConfirmModalDemo,
    DestructiveModalDemo,
} from "@/app/ui/components/Modal/modalDemo";
import { A11yReference } from "../_components/A11yReference";
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
                            La modale s'ouvre via <Text as="span" variant="code">showModal()</Text>,
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
                            initial se pose sur la boîte de dialogue elle-même ; un premier Tab
                            atteint le bouton secondaire, placé avant l'action principale, ce qui
                            évite une validation accidentelle.
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
                <A11yReference
                    keyboard={[
                        { keys: "Tab / Maj+Tab", action: "Le focus est piégé dans la modale : Tab sur le dernier élément revient au premier, Maj+Tab inversement (test). À l'ouverture, le focus est sur la boîte elle-même ; un premier Tab atteint le premier élément focalisable (mesuré dans Chromium)." },
                        { keys: "Échap", action: "Ferme la modale (comportement natif de `<dialog>`, vérifié dans Chromium, non testable en jsdom). Le focus revient au bouton qui l'a ouverte." },
                        { keys: "Entrée / Espace", action: "Activent les boutons de la modale (éléments natifs)." },
                    ]}
                    aria={[
                        { name: "dialog + showModal()", description: "Élément natif ouvert en modal : le rôle « dialog » est implicite, il n'y a pas de `role=\"dialog\"` dans le code. Retrouvé par `getByRole('dialog')` (test). Testé à la main avec VoiceOver sur macOS, dans Chrome et Safari : fonctionne." },
                        { name: "aria-modal=\"true\"", description: "Posé explicitement dans le code. `showModal()` rend déjà le reste de la page inerte : l'attribut est redondant mais sans effet négatif. Couvert par un test." },
                        { name: "aria-labelledby", description: "Référence le titre `h2` de la modale : c'est son nom accessible. Couvert par un test." },
                        { name: "aria-describedby", description: "Référence la description, seulement si la prop `description` est fournie. Couvert par un test." },
                        { name: "tabindex=\"-1\"", description: "Sur le `dialog` : il peut recevoir le focus par script à l'ouverture, sans entrer dans l'ordre de tabulation." },
                        { name: "aria-label du bouton Fermer", description: "« Fermer la boite de dialogue » : contient le texte visible « Fermer », donc le nom accessible commence par le libellé affiché." },
                    ]}
                    wcag={[
                        { criterion: "4.1.2 Nom, rôle et valeur", level: "A", how: "Rôle « dialog » natif, nom issu du titre (test : `getByRole` avec `name`)." },
                        { criterion: "2.1.1 Clavier", level: "A", how: "Tout est opérable au clavier : Tab, Échap, boutons natifs." },
                        { criterion: "2.1.2 Pas de piège au clavier", level: "A", how: "Le focus est piégé volontairement, mais on en sort avec Échap ou le bouton Fermer." },
                        { criterion: "2.4.3 Parcours du focus", level: "A", how: "Le focus entre dans la modale et revient au déclencheur à la fermeture (test et mesure dans Chromium)." },
                        { criterion: "2.4.7 Focus visible", level: "AA", how: "Anneau `--focus-ring` sur `:focus-visible` pour les boutons. Rendu et contraste non mesurés." },
                        { criterion: "2.5.3 Étiquette dans le nom", level: "A", how: "Le nom du bouton Fermer contient son libellé visible." },
                    ]}
                    limits={[
                        "Le test VoiceOver couvre macOS avec Chrome et Safari. NVDA et JAWS (Windows), VoiceOver sur iOS et TalkBack ne sont pas testés.",
                        "Le piège à focus ne connaît que `a[href]`, `button`, `textarea`, `input`, `select` et `[tabindex]`. Un contenu en `summary`, `iframe` ou `contenteditable` n'y serait pas pris en compte.",
                        "Le clic ferme la modale quand sa cible est le `dialog` lui-même : cela inclut la marge intérieure autour du contenu, pas seulement le fond (déduit du code, non mesuré).",
                        "Le scroll de la page est bloqué sur `html` (`overflow-y: hidden`), pas sur `body` : libéré à la fermeture et au démontage (test, mesuré dans Chromium).",
                        "La prop `closeBtn` est inversée : avec `false` (défaut), le bouton Fermer est affiché. Piste de renommage, hors périmètre.",
                        "jsdom n'a pas `showModal()` (stub dans les tests) : Échap et le fond natif ne sont vérifiés que dans un vrai navigateur.",
                    ]}
                />

            </div>
        </div>
    );
}