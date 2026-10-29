import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { NavDropdown } from './NavDropdown';

vi.mock('next/navigation', () => ({ usePathname: () => '/button' }));

const item = {
  label: 'Atomes',
  children: [
    { label: 'Bouton', href: '/button' },
    { label: 'Typographie', href: '/text' },
  ],
};

describe('NavDropdown', () => {
  it('n’a aucune violation d’accessibilité (axe), fermé puis ouvert', async () => {
    const user = userEvent.setup();
    const { container } = render(<NavDropdown item={item} />);
    expect(await axe(container)).toHaveNoViolations();
    await user.click(screen.getByRole('button', { name: 'Atomes' }));
    expect(await axe(container)).toHaveNoViolations();
  });

  it('le déclencheur est un vrai bouton (et non un lien) avec aria-expanded', async () => {
    const user = userEvent.setup();
    render(<NavDropdown item={item} />);
    const trigger = screen.getByRole('button', { name: 'Atomes' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('aria-controls', screen.getByRole('list', { hidden: true }).id);
  });

  it('le menu fermé est inerte : ses liens ne sont pas atteignables au clavier', async () => {
    const user = userEvent.setup();
    render(<NavDropdown item={item} />);
    const list = screen.getByRole('list', { hidden: true });
    expect(list).toHaveAttribute('inert');

    await user.click(screen.getByRole('button', { name: 'Atomes' }));
    expect(list).not.toHaveAttribute('inert');
  });

  it('indique la page courante avec aria-current="page"', async () => {
    const user = userEvent.setup();
    render(<NavDropdown item={item} />);
    await user.click(screen.getByRole('button', { name: 'Atomes' }));
    expect(screen.getByRole('link', { name: 'Bouton' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Typographie' })).not.toHaveAttribute('aria-current');
  });

  it('Échap ferme le menu et rend le focus au bouton', async () => {
    const user = userEvent.setup();
    render(<NavDropdown item={item} />);
    const trigger = screen.getByRole('button', { name: 'Atomes' });
    await user.click(trigger);
    await user.keyboard('{Escape}');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveFocus();
  });
});
