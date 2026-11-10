import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import Navbar from './Navbar';

vi.mock('next/navigation', () => ({ usePathname: () => '/navbar' }));

describe('Navbar (menu mobile)', () => {
  it('le bouton burger a un nom qui change et un aria-expanded synchronisé avec le panneau', async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar />);
    const burger = screen.getByRole('button', { name: 'Ouvrir le menu de navigation' });
    const panel = container.querySelector('#mobile-menu')!;

    expect(burger).toHaveAttribute('aria-expanded', 'false');
    expect(burger).toHaveAttribute('aria-controls', 'mobile-menu');
    // fermé : le panneau est retiré du clavier (inert) et de l'arbre d'accessibilité
    expect(panel).toHaveAttribute('inert');
    expect(panel).toHaveAttribute('aria-hidden', 'true');

    await user.click(burger);
    expect(screen.getByRole('button', { name: 'Fermer le menu de navigation' })).toHaveAttribute('aria-expanded', 'true');
    expect(panel).not.toHaveAttribute('inert');
    expect(panel).toHaveAttribute('aria-hidden', 'false');
  });

  it('Échap ferme le menu mobile et rend le focus au bouton burger', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const burger = screen.getByRole('button', { name: 'Ouvrir le menu de navigation' });
    await user.click(burger);
    await user.keyboard('{Escape}');
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    expect(burger).toHaveFocus();
  });

  it('n’a aucune violation d’accessibilité (axe), menu fermé', async () => {
    const { container } = render(<Navbar />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
