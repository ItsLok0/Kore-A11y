# Leçons apprises (lues par Claude au début de chaque session)

Règles : une leçon = une ligne concrète et vérifiable, sous la bonne rubrique. Pas de doublon : on fusionne. Chaque leçon est ajoutée dans la PR concernée (commit séparé `docs: leçon ...`) pour que le propriétaire puisse la refuser en relisant. Relire et nettoyer une fois par mois.

## Tests
- jsdom n'a pas `HTMLDialogElement.showModal` : le stubber dans les tests de Modal.
- jsdom n'a pas de géométrie : le Tooltip « survolable » (WCAG 1.4.13, safePolygon) se vérifie à la souris, pas dans les tests automatiques.
- Rendu isolé d'un composant : désactiver la règle axe `region`, qui produit de faux positifs.
- Mocker `next/navigation` pour les composants qui l'utilisent (ex. Breadcrumb).
- Les tests axe n'ont de valeur que s'ils passent sur le vrai rendu : un test qui ne peut pas échouer ne prouve rien.

## Accessibilité
- Groupe de cases à cocher : utiliser `fieldset` + `legend`, pas un `div`.
- Un indicateur de statut ne doit pas porter son sens uniquement par la couleur ni par un `aria-label` sur un élément non interactif.

## Pull requests
- PR petites : un sujet, moins de 10 fichiers et environ 200 lignes. Si c'est plus gros, proposer un découpage avant de continuer (les PR #60 et #61 étaient trop grosses).
- Description : ce qui change, pourquoi, comment vérifier, ce qui n'est pas inclus.

## Outillage
- Gestionnaire de paquets : pnpm (`pnpm install --frozen-lockfile`) ; `npm ci` échoue.
- `pnpm lint` échoue tant que `@eslint/js` n'est pas déclaré (à corriger).
- Next.js 16 a des conventions changées : lire `node_modules/next/dist/docs/` avant de coder.

## Retours du propriétaire
- (Ajouter ici chaque retour de relecture de PR, avec la date, sous forme de règle à appliquer.)
