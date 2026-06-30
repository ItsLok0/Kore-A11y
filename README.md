# Kore A11Y — Bibliothèque de composants accessibles *(WIP)*

<img width="700" height="400" alt="Aperçu de Kore A11Y" src="https://github.com/user-attachments/assets/161b07e0-f3ea-4fc4-8c73-a15b64e730dc" />

🔗 **[Voir la démo live →](https://kore-a11y-pierre.vercel.app/)**

> Bibliothèque de composants React accessibles, conformes **WCAG 2.2**, construite avec **Next.js 16** et **Tailwind CSS 4**.

---

## Composants disponibles

| Composant | Statut |
|-----------|--------|
| `<Text>` | ✅ Disponible |
| `<Heading>` | ✅ Disponible |
| `<Button>` | ✅ Disponible |
| `<Input>` | ✅ Disponible |
| `<Textarea>` | ✅ Disponible |
| Autres composants | 🔲 En cours |

---

## Pourquoi ce projet ?

En tant que développeur frontend spécialisé en accessibilité, j'ai conçu Kore A11Y pour trois raisons concrètes :

1. **Prouver la maîtrise technique** — Next.js 16 App Router, React 19, TypeScript strict
2. **Implémenter des patterns d'accessibilité complexes** — au-delà du simple `alt` sur les images
3. **Documenter chaque choix** — pourquoi et comment chaque composant est accessible

---

## Stack

| Technologie | Rôle |
|-------------|------|
| **Next.js 16 (App Router)** | Rendu serveur, routage optimisé, SEO |
| **React 19** | Composants réutilisables, performances UI |
| **Tailwind CSS 4** | Utility-first, compilation rapide |
| **TypeScript** | Typage statique, moins d'erreurs à la source |
| **ESLint + jsx-a11y** | Détection des problèmes d'accessibilité en temps réel |

---

## Focus accessibilité

Chaque composant est audité selon trois critères :

- **Navigation clavier** — gestion du focus (`tabindex`, `focus-visible`)
- **Sémantique HTML5** — balises natives avant tout, ARIA en dernier recours
- **Attributs ARIA** — uniquement là où c'est nécessaire (pas d'ARIA cosmétique)

---

## Lancer le projet en local

**Prérequis** : Node.js v20+ et pnpm installés.

```bash
# Cloner le repo
git clone https://github.com/ItsLok0/Kore-A11y.git
cd Kore-A11y

# Installer les dépendances
pnpm i

# Lancer le serveur de dev
pnpm dev
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```
/app/ui/component    → Composants réutilisables (Text, Button, Input...)
/app/layout/         → Éléments de structure (Header, SkipLink, ...)
```

---

## Méthodologie

Projet réalisé en autonomie avec une approche **SCRUM allégée** :
- GitHub Issues pour le suivi des sprints
- Chaque composant passe par une vérification théorique avant implémentation

---

## Roadmap

- [x] Composants de base (Text, Heading, Button, Input, Textarea)
- [x] Composants complexes (Modal, Accordion, Select, Toast...)
- [ ] Page de documentation par composant
- [ ] Tests automatisés accessibilité (axe-core / jest-axe)

---

## Auteur

**Pierre Parent** — Développeur Frontend | Next.js · Angular · TypeScript | Accessibilité RGAA

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=flat&logo=vercel&logoColor=white)](https://portfolio-pp-gamma.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pierre-parent-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/ItsLok0)
