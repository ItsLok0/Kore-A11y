import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Tab } from './tab';

const sections = [
  { title: 'Profil', content: <p>Contenu profil</p> },
  { title: 'Sécurité', content: <p>Contenu sécurité</p> },
  { title: 'Facturation', content: <p>Contenu facturation</p>, disabled: true },
  { title: 'Aide', content: <p>Contenu aide</p> },
];

describe('Tab', () => {
  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<Tab title="Compte" sections={sections} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('suit le motif ARIA : tablist nommée, tab sélectionné, tabpanel relié au tab', () => {
    render(<Tab title="Compte" sections={sections} />);
    expect(screen.getByRole('tablist', { name: 'Compte' })).toBeInTheDocument();

    const tab = screen.getByRole('tab', { name: 'Profil' });
    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel', { name: 'Profil' })).toBeVisible();
  });

  it('un seul onglet est dans l’ordre de tabulation (tabindex roulant)', () => {
    render(<Tab title="Compte" sections={sections} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs.filter((t) => t.getAttribute('tabindex') === '0')).toHaveLength(1);
  });

  it('le panneau actif est focusable pour les utilisateurs du clavier', () => {
    render(<Tab title="Compte" sections={sections} />);
    expect(screen.getByRole('tabpanel', { name: 'Profil' })).toHaveAttribute('tabindex', '0');
  });

  it('flèches, Début et Fin changent d’onglet et sautent les onglets désactivés', async () => {
    const user = userEvent.setup();
    render(<Tab title="Compte" sections={sections} />);
    screen.getByRole('tab', { name: 'Profil' }).focus();

    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Sécurité' })).toHaveFocus();

    await user.keyboard('{ArrowRight}'); // saute « Facturation » (désactivé)
    expect(screen.getByRole('tab', { name: 'Aide' })).toHaveFocus();
    expect(screen.getByRole('tabpanel', { name: 'Aide' })).toBeVisible();

    await user.keyboard('{ArrowRight}'); // boucle
    expect(screen.getByRole('tab', { name: 'Profil' })).toHaveFocus();

    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: 'Aide' })).toHaveFocus();
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'Profil' })).toHaveFocus();
  });
});
