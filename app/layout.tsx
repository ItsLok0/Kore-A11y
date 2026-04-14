import type { Metadata } from "next";
import "@/app/globals.css";
import SkipLink from "@/component/layout/skip-link";
import { open_sans } from "@/component/ui/fonts";

export const metadata: Metadata = {
  title: "Portfolio A11y",
  description: "Composants accessibles WCAG 2.2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${open_sans.className} antialiased flex min-h-screen h-auto flex-col`}>
        { <SkipLink /> }
        <header>
          <p className="w-full flex justify-center font-bold">Header content</p>
        </header>
        { children }
      </body>
    </html>
  );
}