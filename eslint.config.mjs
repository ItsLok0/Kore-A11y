import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  // eslint-config-next enregistre déjà le plugin jsx-a11y mais n'active qu'une
  // partie des règles : on ajoute ici toutes les règles "recommended".
  {
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      "jsx-a11y/no-autofocus": "warn",
      // Apostrophes et guillemets français dans le texte JSX : HTML valide, sans impact a11y.
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"]),
]);
