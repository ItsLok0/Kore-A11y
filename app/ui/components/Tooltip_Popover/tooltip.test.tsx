import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  it('n’a aucune violation d’accessibilité (axe) ouvert', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Aide contextuelle" delay={0}>
        <button>Aide</button>
      </Tooltip>,
    );
    await user.tab();
    await screen.findByRole('tooltip');
    // La règle « region » (contenu hors repères) ne s'applique qu'à une page complète, pas à un composant isolé.
    expect(await axe(document.body, { rules: { region: { enabled: false } } })).toHaveNoViolations();
  });

  it('s’affiche au focus clavier et décrit le bouton (aria-describedby sur le bouton)', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Aide contextuelle" delay={0}>
        <button>Aide</button>
      </Tooltip>,
    );
    const button = screen.getByRole('button', { name: 'Aide' });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await user.tab();
    const tip = await screen.findByRole('tooltip');
    expect(button).toHaveFocus();
    expect(button).toHaveAccessibleDescription('Aide contextuelle');
    expect(button).toHaveAttribute('aria-describedby', tip.id);
  });

  it('Échap ferme le tooltip sans déplacer le focus (WCAG 1.4.13 : masquable)', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Aide contextuelle" delay={0}>
        <button>Aide</button>
      </Tooltip>,
    );
    await user.tab();
    await screen.findByRole('tooltip');
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Aide' })).toHaveFocus();
  });

  it('s’affiche au survol (WCAG 1.4.13 : déclenchable à la souris)', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Aide contextuelle" delay={0}>
        <button>Aide</button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button', { name: 'Aide' }));
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Aide contextuelle');
  });
});
