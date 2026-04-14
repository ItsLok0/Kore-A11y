import { Button } from "@/component/ui/button";
import { Heading } from "@/component/ui/heading";
import { Text } from "@/component/ui/text";
import { Input } from "@/component/ui/input";

export default function Home() {
  return (
  <main id="main-content" className="flex flex-1 items-center justify-center p-3 flex-col gap-10 focus-visible:shadow-none!" tabIndex={-1}>
      <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
        <Heading as="h1">Accessibilité Numérique</Heading>
      
        <Heading as="h2" level={3}>Sous-section de page</Heading>

        <Text variant="body">
          Paragraphe body
        </Text>

        <Text variant="lead">
          Un paragraphe lead
        </Text>

        <Text variant="code" as="code">Text code</Text>

        <Text variant="caption" as="figcaption">Figcaption</Text>

        <Text variant="small" className="italic">
          Small : avril 2026
        </Text>
      </div>
      <div className="inputs">
        <Input label="test" type="text" defaultValue="bonjour" />
      </div>
      <div className="exemple-btn flex justify-around flex-wrap gap-4">
        <Button
          size="lg"
          fullWidth={false}
          aria-label="Exemple de bouton principal large"
        >
            Btn primary large
        </Button>
        <Button
          variant="secondary"
          aria-label="Exemple de bouton secondaire moyen"
        >
            Btn secondary medium
        </Button>
        <Button
          variant="danger"
          size="sm"
          disabled
          aria-label="Exemple de bouton danger petit désactivé"
        >
            Btn danger small disabled
        </Button>
        <Button
          variant="success"
          fullWidth={true}
          aria-label="Exemple de bouton success plein largeur"
        >
            Btn success full width
        </Button>
      </div>
    </main>
  );
}