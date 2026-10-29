import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Accordion } from './accordion';

const sections = [
  { title: 'Section A', content: <p>Contenu A</p>, defaultOpen: true },
  { title: 'Section B', content: <p>Contenu B</p> },
  { title: 'Section C', content: <p>Contenu C</p>, disabled: true },
];

describe('Accordion', () => {
  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<Accordion sections={sections} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('expose aria-expanded et aria-controls sur chaque bouton', () => {
    render(<Accordion sections={sections} />);
    const a = screen.getByRole('button', { name: 'Section A' });
    const b = screen.getByRole('button', { name: 'Section B' });

    expect(a).toHaveAttribute('aria-expanded', 'true');
    expect(b).toHaveAttribute('aria-expanded', 'false');
    expect(a).toHaveAttribute('aria-controls');
  });

  it('ouvre et ferme une section au clavier (Entrée)', async () => {
    const user = userEvent.setup();
    render(<Accordion sections={sections} />);
    const b = screen.getByRole('button', { name: 'Section B' });

    b.focus();
    await user.keyboard('{Enter}');
    expect(b).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Contenu B')).toBeVisible();

    await user.keyboard('{Enter}');
    expect(b).toHaveAttribute('aria-expanded', 'false');
  });

  it('ne permet pas d’ouvrir une section désactivée', async () => {
    const user = userEvent.setup();
    render(<Accordion sections={sections} />);
    const c = screen.getByRole('button', { name: 'Section C' });

    expect(c).toBeDisabled();
    await user.click(c);
    expect(c).toHaveAttribute('aria-expanded', 'false');
  });
});
