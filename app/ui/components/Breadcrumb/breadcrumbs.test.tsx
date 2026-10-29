import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Breadcrumbs from './Breadcrumbs';

const segments = vi.hoisted(() => ({ value: ['(components)', 'tooltip_&_popover'] as string[] }));
vi.mock('next/navigation', () => ({
  useSelectedLayoutSegments: () => segments.value,
}));

describe('Breadcrumbs', () => {
  beforeEach(() => {
    segments.value = ['(components)', 'checkbox'];
  });

  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<Breadcrumbs />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('est un repère de navigation nommé « Fil d’Ariane »', () => {
    render(<Breadcrumbs />);
    expect(screen.getByRole('navigation', { name: 'Fil d\'Ariane' })).toBeInTheDocument();
  });

  it('liste uniquement les pages (pas de séparateur compté comme élément de liste)', () => {
    render(<Breadcrumbs />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2); // Accueil + Checkbox
  });

  it('marque la page courante avec aria-current="page" sur l’élément lui-même', () => {
    render(<Breadcrumbs />);
    const current = screen.getByText('Checkbox');
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Accueil' })).not.toHaveAttribute('aria-current');
  });

  it('ne rend rien sur la page d’accueil', () => {
    segments.value = [];
    const { container } = render(<Breadcrumbs />);
    expect(container).toBeEmptyDOMElement();
  });
});
