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

const cell = 'border-b border-border-subtle px-3 py-2 text-left align-top';

/**
 * Fiche de référence accessibilité d'un composant : clavier, rôles/ARIA, critères WCAG 2.2.
 * Les tableaux ont un <caption> et des <th scope> pour être lisibles au lecteur d'écran.
 */
export function A11yReference({ keyboard, aria, wcag, limits }: A11yReferenceProps) {
  return (
    <section
      aria-labelledby="a11y-reference-title"
      className="flex flex-col gap-8 rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:p-8"
    >
      <Heading as="h2" level={2} id="a11y-reference-title">
        Référence accessibilité
      </Heading>

      <div className="space-y-3">
        <Heading as="h3" level={4}>Clavier</Heading>
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
                    <kbd className="rounded border border-border-subtle px-1.5 py-0.5 font-mono">
                      {keys}
                    </kbd>
                  </th>
                  <td className={cell}>{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <Heading as="h3" level={4}>Rôles et attributs ARIA</Heading>
        <dl className="space-y-3">
          {aria.map(({ name, description }) => (
            <div key={name}>
              <dt className="font-mono font-bold">{name}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="space-y-3">
        <Heading as="h3" level={4}>Critères WCAG 2.2</Heading>
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
                  <td className={cell}>{how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {limits && limits.length > 0 && (
        <div className="space-y-3">
          <Heading as="h3" level={4}>Limites et points à vérifier</Heading>
          <ul className="list-disc space-y-2 pl-5">
            {limits.map((limit) => (
              <li key={limit}>
                <Text>{limit}</Text>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
