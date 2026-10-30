@AGENTS.md

# Kore A11Y : instructions pour Claude

Bibliothèque de composants React accessibles (WCAG 2.2 / RGAA). Next.js 16, React 19, Tailwind 4, TypeScript, pnpm, Vitest + Testing Library + vitest-axe. Le propriétaire est développeur web junior et apprend : explique brièvement le pourquoi de chaque choix. Réponds en français, court, sans introduction ni conclusion de politesse.

## Commandes (pnpm uniquement)
- `pnpm install --frozen-lockfile` : installer (npm ci échoue)
- `pnpm dev` : serveur de dev ; `pnpm build` : build
- `pnpm test` : tests une fois ; `pnpm test:watch` : en continu
- `pnpm lint` : ESLint (jsx-a11y)

## Structure
- `app/ui/components/<Composant>/` : composant + son `*.test.tsx` à côté. Quelques composants simples sont à plat dans `app/ui/components/`.
- `app/layout/` : Header, Navbar, SkipLink. Alias `@` = racine du repo.
- Config tests : `vitest.config.ts`, `vitest.setup.ts`. CI : `.github/workflows/test.yml`.

## Règles d'accessibilité
- HTML sémantique d'abord, ARIA en dernier recours ; patterns WAI-ARIA APG.
- Focus visible, contraste suffisant, jamais d'information portée par la couleur seule.
- Un composant n'est terminé que s'il a des tests : axe (`toHaveNoViolations`), nom accessible + attributs ARIA, usage au clavier.
- Les tests jsdom ne remplacent pas un test manuel clavier + lecteur d'écran : le signaler quand c'est pertinent.

## Pull requests : petites et faciles à relire (règle importante)
- Une PR = un seul sujet. Si une demande en contient plusieurs, la découper en plusieurs PR.
- Cible : moins de 10 fichiers et environ 200 lignes modifiées. Au-delà, proposer un découpage avant de continuer.
- Ne jamais mélanger dans une même PR : refactor, correction de bug, nouvelle fonctionnalité, mise en forme. Pas de reformatage de fichiers non concernés.
- Un commit par étape logique, avec un message clair (ex. `fix(a11y): ...`, `test: ...`, `docs: ...`).
- Description de PR courte, toujours avec : ce qui change, pourquoi, comment le vérifier (commandes lancées et résultat), ce qui n'est pas inclus.
- Avant d'ouvrir la PR : `pnpm lint` et `pnpm test` verts, et relire le diff soi-même.

## Git
- Toujours travailler sur une branche (`feat/...`, `fix/...`, `docs/...`) et ouvrir une PR vers `main`. Ne jamais pousser sur `main`. Le propriétaire fusionne lui-même.
- Ne rien affirmer sans l'avoir vérifié (commande lancée, résultat lu).
