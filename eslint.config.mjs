import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import a11yPlugin from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "public/**",
    ],
  },
  js.configs.recommended,
  {
    plugins: {
      "@next/next": nextPlugin,
      "jsx-a11y": a11yPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...a11yPlugin.configs.recommended.rules,
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/no-autofocus": "warn",
    },
  },
];