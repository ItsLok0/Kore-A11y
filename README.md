# Portfolio A11y — Next.js 16

[Site en ligne](https://portfolio-a11y-pierre.vercel.app/)

- [Next.js: 16](https://nextjs.org/)
- [Tailwind: 4](https://tailwindcss.com/)

> Ce portfolio démontre ma capacité à concevoir des interfaces modernes, performantes et strictement conformes aux normes **WCAG 2.2**, en utilisant les dernières fonctionnalités du **App Router de Next.js**.

---

## Objectif

En tant que développeur web junior spécialisé en accessibilité, j'ai conçu ce projet pour :
1. **Prouver ma maîtrise technique** de Next.js 16.
2. **Implémenter des patterns complexes** d'accessibilité.
3. **Documenter chaque composant** afin d'expliquer pourquoi et comment il est accessible.

---

## Stack

| Technologie | Rôle |
| :--- | :--- |
| **Next.js 16 (App Router)** | Framework Fullstack qui gère le rendu côté serveur et le routage pour rendre plus efficace l'affichage et le référencement. |
| **React 19** | Bibliothèque UI qui gère l'interface grâce à des composants réutilisables et optimise les performances. |
| **Tailwind CSS 4** | Framework Utility-First qui optimise la rapidité de compilation et simplifiant le design via des classes CSS réutilisables.  |
| **TypeScript** | Surcouche de Javascript qui permet un typage statique rigoureux afin de limiter les erreurs lors du développement. |
| **ESLint + jsx-a11y** | Outils d'analyse pour l'accessibilité en temps réel |

---

## Détails Techniques

### 1. Prérequis
Avoir **Node.js v20+** installé sur la machine.

### 2. Installation
```bash
# Cloner le dépôt
git clone [https://github.com/ItsLok0/portfolio-a11y.git](https://github.com/ItsLok0/portfolio-a11y.git)

# Entrer dans le dossier
cd portfolio-a11y

# Installer les dépendances
npm install
```

### 3. Commandes disponibles
Avoir **pnpm** installé sur la machine (plus rapide et efficace que ``npm`` ou ``yarn``).

- ``pnpm i`` : Installer les packages du projet
- ``pnpm dev`` : Compile l'application pour la production.

### 4. Structure des dossiers
- ``/ui/`` : Eléments réutilisables.
- ``/component/`` : Éléments de structure (SkipLink, Navbar, Footer).

### 5. Méthodologie & Workflow (IA-Assisted)
Bien que ce projet soit réalisé en autonomie, j'ai choisi d'intégrer l'``Intelligence Artificielle (Gemini & Claude)`` non pas comme un simple générateur de code, mais comme un partenaire ``stratégique`` pour simuler un flux de travail professionnel de type ``SCRUM``.

Pour garantir la rigueur du projet, j'ai utilisé l'IA pour :
- ``Définition du Product Backlog :`` En agissant comme un Product Owner, l'IA a aidé à découper les fonctionnalités complexes en ``User Stories``.
- ``Planification Agile :`` Chaque étape du développement est documentée via des GitHub Issues, permettant un suivi précis et une approche itérative (Sprints).
- ``Garde-fou A11y :`` L'IA m'accompagne dans la vérification théorique des normes ``WCAG 2.2`` avant chaque implémentation technique.

``Pourquoi cette approche ?`` L'objectif est de démontrer ma capacité à piloter un projet de A à Z, en utilisant les outils modernes pour structurer ma pensée, optimiser mon temps de développement et garantir une qualité de code conforme aux standards de l'industrie.

---

## Focus Accessibilité

Chaque composant présent dans cette bibliothèque est audité selon les critères suivants :

- **Navigation clavier** : Gestion du focus (``tabindex``, ``focus-visible``).
- **Sémantique** : Utilisation de HTML5 sémantique pour une meilleure lecture par les technologies d'assistance.
- **Signaux ARIA** : Utilisation des attributs ``aria`` quand c'est nécessaire.

---

## Contact

- [Portfolio en ligne](https://portfolio-pp-gamma.vercel.app/)
- [Linkedin](https://www.linkedin.com/in/pierre-parent-811533283/)