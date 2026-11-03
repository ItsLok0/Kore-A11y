import { render, screen, within } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { A11yReference } from './A11yReference';

const props = {
  keyboard: [{ keys: 'Entrée', action: 'Active le bouton.' }],
  aria: [{ name: 'aria-busy', description: 'true pendant le chargement.' }],
  wcag: [{ criterion: '2.1.1 Clavier', level: 'A' as const, how: 'Bouton natif.' }],
  limits: ['Test lecteur d’écran à faire.'],
};

describe('A11yReference', () => {
  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<A11yReference {...props} />);
    expect(await axe(container, { rules: { region: { enabled: false } } })).toHaveNoViolations();
  });

  it('est une région nommée par son titre, avec des sous-titres h3', () => {
    render(<A11yReference {...props} />);
    expect(screen.getByRole('region', { name: 'Référence accessibilité' })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual([
      'Clavier',
      'Rôles et attributs ARIA',
      'Critères WCAG 2.2',
      'Limites et points à vérifier',
    ]);
  });

  it('expose des tableaux nommés avec des en-têtes de ligne et de colonne', () => {
    render(<A11yReference {...props} />);
    const keyboard = screen.getByRole('table', { name: 'Interactions clavier' });
    expect(within(keyboard).getAllByRole('columnheader')).toHaveLength(2);
    expect(within(keyboard).getByRole('rowheader', { name: 'Entrée' })).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'Critères WCAG 2.2 pris en charge' })).toBeInTheDocument();
  });

  it('n’affiche pas la section des limites quand il n’y en a pas', () => {
    render(<A11yReference {...props} limits={undefined} />);
    expect(screen.queryByRole('heading', { name: 'Limites et points à vérifier' })).not.toBeInTheDocument();
  });
});
