import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";
import SkipLink from "@/component/layout/skip-link";

const open_sans = Open_Sans  ({
  subsets: ["latin"],
  weight: '400',
});

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
        <div className="skipLink">
          { <SkipLink /> }
        </div>
        <header>  
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Btn header
          </button>
        </header>
        { children }
      </body>
    </html>
  );
}