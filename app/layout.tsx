import type { Metadata } from "next";
import "@/app/globals.css";
import SkipLink from "@/app/layout/skip-link";
import { open_sans } from "@/app/ui/fonts";
import Header from "./layout/header";
import React from "react";
import ServerBreadcrumbs from "./ui/components/Breadcrumb/Breadcrumbs";

export const metadata: Metadata = {
  title: {
      default: "Kore A11y",
      template: "%s | Kore A11y",
  },
  description: "Composants accessibles WCAG 2.2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${open_sans.className} antialiased bg-bg-page text-text-primary`}>
        { <SkipLink /> }
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">
          <ServerBreadcrumbs/>
          { children }

          {/* Régions d'annonce pour les lecteurs d'écran */}
          <div
            id="announcer"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
            tabIndex={-1}
          />
          <div
            id="announcer-assertive"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            className="sr-only"
            tabIndex={-1}
          />
        </main>
      </body>
    </html>
  );
}