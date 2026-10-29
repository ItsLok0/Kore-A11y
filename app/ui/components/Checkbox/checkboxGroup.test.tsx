import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { CheckboxGroup } from './checkboxGroup';

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B', description: 'Détail B' },
];

describe('CheckboxGroup', () => {
  it('n’a aucune violation d’accessibilité (axe), y compris requis et en erreur', async () => {
    const { container } = render(
      <CheckboxGroup legend="Centres d’intérêt" name="interests" options={options} required error errorMessage="Choisissez au moins une option" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('regroupe les cases dans un fieldset nommé par sa légende', () => {
    render(<CheckboxGroup legend="Centres d’intérêt" name="interests" options={options} />);
    const group = screen.getByRole('group', { name: 'Centres d’intérêt' });
    expect(group).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });

  it('indique « obligatoire » aux lecteurs d’écran sans exposer l’astérisque', () => {
    render(<CheckboxGroup legend="Choix" name="c" options={options} required />);
    const group = screen.getByRole('group');
    expect(group).toHaveAccessibleName(/Choix\s*\(obligatoire\)/);
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });

  it('relie le message d’erreur au groupe et marque les cases invalides', () => {
    render(<CheckboxGroup legend="Choix" name="c" options={options} error errorMessage="Choisissez une option" />);
    expect(screen.getByRole('group')).toHaveAccessibleDescription('Choisissez une option');
    for (const box of screen.getAllByRole('checkbox')) {
      expect(box).toHaveAttribute('aria-invalid', 'true');
    }
  });
});
