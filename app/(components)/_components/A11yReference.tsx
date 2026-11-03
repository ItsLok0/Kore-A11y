import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';

type KeyboardEntry = { keys: string; action: string };
type AriaEntry = { name: string; description: string };
type WcagEntry = { criterion: string; level: 'A' | 'AA' | 'AAA'; how: string };

interface A11yReferenceProps {
  keyboard: KeyboardEntry[];
  aria: AriaEntry[];
  wcag: WcagEntry[];
  /** Ce qui n'est pas garanti ou pas encore vérifié (test manuel, autres navigateurs...). */
  limits?: string[];
}

// Même rendu que l'ancienne « Note accessibilité » : sous-titres soulignés, texte small.
const subtitle = 'text-sm font-bold underline';
const cell = 'border-b border-border-subtle px-2 py-2 text-left align-top text-sm font-medium leading-body';

/** Affiche le texte avec les passages entre `backticks` en pastille « code ». */
function Rich({ children }: { children: string }) {
  return (
    <>
      {children.split(/`([^`]+)`/).map((part, i) =>
        i % 2 === 1 ? (
          <Text as="span" variant="code" key={i}>
            {part}
          </Text>
        ) : (
          part
        ),
      )}
    </>
  );
}

/**
 * Fiche de référence accessibilité d'un composant : clavier, rôles/ARIA, critères WCAG 2.2.
 * Les tableaux ont un <caption> et des <th scope> pour être lisibles au lecteur d'écran.
 * Dans les textes, les termes techniques s'écrivent entre `backticks`.
 */
export function A11yReference({ keyboard, aria, wcag, limits }: A11yReferenceProps) {
  return (
    <section
      aria-labelledby="a11y-reference-title"
      className="rounded-2xl border border-border-subtle bg-primary-subtle p-6 sm:p-8"
    >
      <Heading as="h2" level={4} id="a11y-reference-title" className="mb-4 italic text-primary">
        Référence accessibilité
      </Heading>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <Heading as="h3" level={6} className={subtitle}>Clavier</Heading>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="sr-only">Interactions clavier</caption>
              <thead>
                <tr>
                  <th scope="col" className={cell}>Touche</th>
                  <th scope="col" className={cell}>Action</th>
                </tr>
              </thead>
              <tbody>
                {keyboard.map(({ keys, action }) => (
                  <tr key={keys}>
                    <th scope="row" className={cell}>
                      <kbd>
                        <Text as="span" variant="code">{keys}</Text>
                      </kbd>
                    </th>
                    <td className={cell}><Rich>{action}</Rich></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2">
          <Heading as="h3" level={6} className={subtitle}>Rôles et attributs ARIA</Heading>
          <dl className="space-y-3">
            {aria.map(({ name, description }) => (
              <div key={name} className="space-y-1">
                <dt>
                  <Text as="span" variant="code">{name}</Text>
                </dt>
                <dd>
                  <Text variant="small"><Rich>{description}</Rich></Text>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Heading as="h3" level={6} className={subtitle}>Critères WCAG 2.2</Heading>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="sr-only">Critères WCAG 2.2 pris en charge</caption>
              <thead>
                <tr>
                  <th scope="col" className={cell}>Critère</th>
                  <th scope="col" className={cell}>Niveau</th>
                  <th scope="col" className={cell}>Comment</th>
                </tr>
              </thead>
              <tbody>
                {wcag.map(({ criterion, level, how }) => (
                  <tr key={criterion}>
                    <th scope="row" className={cell}>{criterion}</th>
                    <td className={cell}>{level}</td>
                    <td className={cell}><Rich>{how}</Rich></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {limits && limits.length > 0 && (
          <div className="space-y-2 md:col-span-2">
            <Heading as="h3" level={6} className={subtitle}>Limites et points à vérifier</Heading>
            <ul className="list-disc space-y-2 pl-5">
              {limits.map((limit) => (
                <li key={limit}>
                  <Text variant="small"><Rich>{limit}</Rich></Text>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
