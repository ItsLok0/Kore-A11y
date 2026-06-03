'use client';

import React, { useState } from "react";
import { Modal } from "./modal";
import { Button } from "@/app/ui/components/Button/button";
import { Text } from "@/app/ui/components/text";
import { StatusIndicator } from "../StatusIndicator/statusIndicator";

// Basique
export function BasicModalDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setIsOpen(true)}>
                Ouvrir la modale
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Titre de la modale"
            >
                <Text variant="small">
                    Contenu de la modale. Naviguez au clavier pour vérifier que
                    le focus reste piégé ici jusqu'à la fermeture.
                </Text>
            </Modal>
        </>
    );
}

// Avec formulaire et description
export function FormModalDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setIsOpen(true)}>
                Modifier le profil
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Modifier le profil"
                description="Les champs marqués d'un astérisque sont obligatoires."
                closeBtn={true}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium text-text-primary">
                            Nom <span aria-hidden="true">*</span>
                            <span className="sr-only">(obligatoire)</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="rounded-md border border-border-subtle px-3 py-2 text-sm focus-visible:shadow-(--focus-ring) outline-none"
                            placeholder="Votre nom"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-text-primary">
                            Email <span aria-hidden="true">*</span>
                            <span className="sr-only">(obligatoire)</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="rounded-md border border-border-subtle px-3 py-2 text-sm focus-visible:shadow-(--focus-ring) outline-none"
                            placeholder="votre@email.com"
                        />
                    </div>
                    <div className="flex justify-end gap-3 mt-4">
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>
                            Annuler
                        </Button>
                        <Button variant="primary" onClick={() => setIsOpen(false)}>
                            Sauvegarder
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

// Avec confirmation
export function ConfirmModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirm = () => {
        setConfirmed(true);
        setIsOpen(false);
    };

    return (
        <>
            <div className="flex flex-col items-center gap-3">
                <Button  variant="primary" onClick={() => setIsOpen(true)}>
                    Publier l'article
                </Button>
                {confirmed && (
                    <StatusIndicator
                        status="success"
                        label="Article publié avec succès"
                    />
                )}
            </div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Confirmer la publication"
                description="L'article sera visible publiquement. Cette action peut être annulée depuis le tableau de bord."
                closeBtn={true}
            >
                <div className="flex justify-end gap-3 mt-4">
                    <Button variant="secondary" onClick={() => setIsOpen(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Publier
                    </Button>
                </div>
            </Modal>
        </>
    );
}

// Action destructrice
export function DestructiveModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const handleDelete = () => {
        setDeleted(true);
        setIsOpen(false);
    };

    return (
        <>
            <div className="flex flex-col items-center gap-3">
                <Button variant="danger" onClick={() => setIsOpen(true)}>
                    Supprimer le compte
                </Button>
                <div aria-live="polite" aria-atomic="true">
                    {deleted && (
                        <StatusIndicator
                            status="success"
                            label="Compte supprimé avec succès"
                        />
                    )}
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Supprimer le compte"
                description="Cette action est irréversible. Toutes vos données seront définitivement supprimées."
                closeBtn={true}
            >
                <div className="flex justify-end gap-3 mt-4">
                    <Button variant="secondary" onClick={() => setIsOpen(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Supprimer définitivement
                    </Button>
                </div>
            </Modal>
        </>
    );
}