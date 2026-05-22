import { Button } from '@/app/ui/components/Button/button';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { Input } from '@/app/ui/components/input';
import Link from 'next/link';
import { TextArea } from './ui/components/textarea';
import { Checkbox } from './ui/components/Checkbox/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    return (
        <>
            {/* PREMIERE SECTION */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        <span className="flex h-2 w-2" aria-hidden="true">
                            <span className="inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <Text variant="caption" className="font-bold text-text-secondary">Phase 3 en cours : Composant complexes (Patterns ARIA)</Text>
                    </div>
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold">
                        Kore <span className="text-primary">A11Y</span>
                    </Heading>
                    <Text variant="lead" className="max-w-2xl">
                        Une bibliothèque de composants pensée pour le RGAA.
                    </Text>
                    <div className="flex gap-4 mt-4">
                        <Link href="https://github.com/ItsLok0/Kore-A11y" target="_blank" className="flex border-2 p-2 rounded-md items-center gap-2 text-primary hover:underline focus:underline">
                            Dépôt GitHub
                        </Link>
                    </div>
                </div>
            </section>

            {/* ROADMAP BANDEAU */}
            <section className="border-y-2 border-primary bg-bg-surface py-5">
                <div className="max-w-5xl mx-auto px-6">
                    <ol aria-label="Progression du projet" className="flex items-center sm:justify-around max-sm:justify-center flex-wrap gap-6 md:gap-10">
                        
                        {/* Phase 1 */}
                        <li className="flex items-center gap-2">
                            <Text aria-hidden="true" as='span' className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-[10px] font-bold text-white">
                                <FontAwesomeIcon icon={faCheck} className='w-3' />
                            </Text>
                            <Text variant="small" className="font-bold text-success">Phase 1 : Lancement
                                <Text as="span" className="sr-only">, Terminé</Text>
                            </Text>
                        </li>

                        {/* Phase 2 */}
                        <li className="flex items-center gap-2">
                            <Text aria-hidden="true" as='span' className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-[10px] font-bold text-white">
                                <FontAwesomeIcon icon={faCheck} className='w-3' />
                            </Text>
                            <Text variant="small" className="font-bold text-success">Phase 2 : Atomes UI
                                <Text as="span" className="sr-only">, Terminé</Text>
                            </Text>
                        </li>

                        {/* Phase 3 */}
                        <li className="flex items-center gap-2">
                            <Text aria-hidden="true" as='span' className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                3
                            </Text>
                            <Text variant="small" className="font-bold text-primary">Phase 3 : Patterns
                                <Text as="span" className="sr-only">, En cours</Text>
                            </Text>
                        </li>

                        {/* Phase 4 */}
                        <li className="flex items-center gap-2 text-text-muted">
                            <Text aria-hidden="true" as='span' className="flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle text-[10px]">
                                4
                            </Text>
                            <Text variant="small" className="font-bold text-text-muted">Phase 4 : Patterns
                                <Text as="span" className="sr-only">, À venir</Text>
                            </Text>
                        </li>

                        {/* Phase 5 */}
                        <li className="flex items-center gap-2 text-text-muted">
                            <Text aria-hidden="true" as='span' className="flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle text-[10px]">
                                5
                            </Text>
                            <Text variant="small" className="font-bold text-text-muted">Phase 5 : Audit
                                <Text as="span" className="sr-only">, À venir</Text>
                            </Text>
                        </li>

                    </ol>
                </div>
            </section>

            {/* SECTION ATOMES */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="mb-16 space-y-4">
                    <Heading as="h2" level={2} className="mb-16 text-center">
                        Bibliothèque d'Atomes
                    </Heading>
                    <Text variant="body" className="text-text-secondary text-center md:px-32">
                        Les briques de base de l'interface. Ces composants assurent la cohérence sémantique et visuelle.
                    </Text>
                </div>
                
                <div className="grid gap-12">
                    {/* Carte Heading - Structure Sémantique */}
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-primary">
                        <div className="flex flex-col gap-4 p-10 bg-white rounded-2xl shadow-sm border border-border-subtle">
                            <Heading as="span" level={1} className="text-primary">Titre Niveau 1</Heading>
                            <Heading as="span" level={2}>Titre Niveau 2</Heading>
                            <Heading as="span" level={3}>Titre Niveau 3</Heading>
                            <Heading as="span" level={4} className="text-text-secondary italic">Titre Niveau 4 (Variante)</Heading>
                        </div>
                        <div className="space-y-4">
                            <Text variant="caption" className="text-primary font-bold">Composant : Heading</Text>
                            <Heading as="h3" level={3}>Structure & Navigation</Heading>
                            <Text variant="body">
                                Garantit une structure de document logique. La prop <Text variant="code">as</Text> définit la balise HTML, tandis que <Text as="span" variant="code">level</Text> gère le style visuel, permettant de respecter la hiérarchie sans sacrifier le design.
                            </Text>
                            <div className="p-3 bg-primary-subtle rounded-lg border border-primary/10">
                                <Text variant="small" className="text-primary-700">
                                    <Text as='span' variant='small' className='font-bold'>Information :</Text> Ici tous les <Text as="span" variant="code">as</Text> sont en H4 pour ne pas casser la hiérarchie sémantique de la page.
                                </Text>
                            </div>
                        </div>
                    </div>

                  {/* Carte Text - La base du système */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-primary">
                      <div className="flex flex-col gap-4 p-10 bg-white rounded-2xl shadow-sm border border-border-subtle">
                          <Text variant="lead">Texte d'introduction (Lead)</Text>
                          <Text variant="body">Corps de texte standard pour la lecture.</Text>
                          <div className="flex items-center gap-2">
                              <Text variant="small" className="text-secondary">Libellé :</Text>
                              <Text as="span" variant="code">Component.tsx</Text>
                          </div>
                          <Text variant="caption" className='text-secondary'>MÉTADONNÉES EN MAJUSCULES</Text>
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary font-bold">Composant : Text</Text>
                          <Heading as="h3" level={3}>Typographie & Hiérarchie (10.x)</Heading>
                          <Text variant="body">
                              Gère la cohérence visuelle des polices, tailles et hauteurs de ligne. 
                              Il permet de respecter le critère 10.1 sur la lisibilité et l'espacement du texte sans casser le layout.
                          </Text>
                      </div>
                  </div>

                  {/* Carte Button */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-primary">
                      <div className="flex flex-wrap gap-4 p-10 bg-white rounded-2xl shadow-sm border border-border-subtle justify-center">
                          <Button variant="primary">Valider</Button>
                          <Button variant="outline">Annuler</Button>
                          <Button variant="danger">Supprimer</Button>
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary">Composant : Button</Text>
                          <Heading as="h3" level={3}>Accessibilité RGAA 11.x</Heading>
                          <Text variant="body">
                              Nos boutons garantissent un contraste minimum de 4.5:1 et des zones de clic optimisées. 
                              Les états de focus sont renforcés pour la navigation au clavier.
                          </Text>
                      </div>
                  </div>

                  {/* Carte Input */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-primary">
                      <div className="p-10 bg-white rounded-2xl shadow-sm border border-border-subtle">
                          <Input 
                              label="Nom complet" 
                              placeholder="Jean Dupont" 
                              description="Utilisé pour votre profil public." 
                          />
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary">Composant : Input</Text>
                          <Heading as="h3" level={3}>Saisie de données 11.2</Heading>
                          <Text variant="body">
                              Liaison explicite entre label et champ via <Text as="span" variant="code">id</Text>. 
                              Les messages d'erreur et descriptions sont liés via <Text as="span" variant="code">aria-describedby</Text>.
                          </Text>
                      </div>
                  </div>

                  {/* Carte TextArea */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-primary">
                      <div className="p-10 bg-white rounded-2xl shadow-sm border border-border-subtle">
                          <TextArea 
                              label="Description de votre projet" 
                              placeholder="Décrivez ici les détails techniques..." 
                              rows={4}
                              description="Soyez le plus précis possible." 
                          />
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary">Composant : TextArea</Text>
                          <Heading as="h3" level={3}>Zones de texte</Heading>
                          <Text variant="body">
                              Hérite de toute la logique d'accessibilité de l'Input standard. Il supporte les attributs natifs <Text as="span" variant="code">rows</Text> et <Text as="span" variant="code">cols</Text> tout 
                              en conservant un design fluide et responsive.
                          </Text>
                      </div>
                  </div>

                  {/* Carte Checkbox */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-primary">
                      <div className="flex flex-col gap-6 p-10 bg-white rounded-2xl shadow-sm border border-border-subtle">
                          <Checkbox 
                              label="J'accepte les conditions générales" 
                              defaultChecked
                          />
                          <Checkbox 
                              label="S'abonner à la newsletter" 
                              description="Recevez nos actualités une fois par mois."
                          />
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary">Composant : Checkbox</Text>
                          <Heading as="h3" level={3}>Indicateurs de choix binaires</Heading>
                          <Text variant="body">
                              L'input est imbriqué dans le label pour maximiser la surface de clic (UX). 
                              L'utilisation de <Text as="span" variant="code">useId</Text> garantit une liaison robuste entre 
                              le texte, la description et l'état visuel pour les technologies d'assistance.
                          </Text>
                      </div>
                  </div>
                </div>
            </section>

            {/* SECTION COMPLEXES (Roadmap) */}
            <section className="py-20 px-6 bg-bg-subtle/50 border-t-2 border-primary">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 space-y-2">
                        <Heading as="h2" level={2}>Prochaines Étapes</Heading>
                        <Text variant="body" className="text-text-secondary">
                            Éléments en cours de conception et objectifs de conformité pour les phases 3 à 5.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Phase 3 : Patterns complexes */}
                        <div className="flex flex-col gap-4 p-6 border border-dashed border-border-subtle rounded-2xl bg-bg-surface/50 opacity-80">
                            <Text variant="caption" className="text-primary font-bold">Phase 3 : Patterns ARIA</Text>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Modales & Focus Trap</Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Tabs & Keyboard Nav</Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Tooltips & Popovers</Text>
                                </li>
                            </ul>
                        </div>

                        {/* Phase 4 : Navigation & Thème */}
                        <div className="flex flex-col gap-4 p-6 border border-dashed border-border-subtle rounded-2xl bg-bg-surface/50 opacity-80">
                            <Text variant="caption" className="text-primary font-bold">Phase 4 : Global UI</Text>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Menu Burger Accessible</Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Dark Mode Switcher</Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Breadcrumbs Sémantiques</Text>
                                </li>
                            </ul>
                        </div>

                        {/* Phase 5 : Expertise A11y */}
                        <div className="flex flex-col gap-4 p-6 border border-dashed border-border-subtle rounded-2xl bg-bg-surface/50 opacity-80 md:col-span-1 sm:col-span-2">
                            <Text variant="caption" className="text-primary font-bold">Phase 5 : Audit & Qualité</Text>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-center gap-2 font-medium">
                                    <Text variant="small">Audit Automatisé Axe-core</Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Tests Lecteurs d'écran</Text>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Text variant="small">Documentation A11y</Text>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}