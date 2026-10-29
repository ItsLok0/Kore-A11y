import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Popover } from './popover';

describe('Popover', () => {
  it('n’a aucune violation d’accessibilité (axe), fermée puis ouverte en mode dialogue', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Popover isDialog dialogTitle="Options" dialogDescription="Réglages rapides" content={<button>Appliquer</button>}>
        <button>Ouvrir</button>
      </Popover>,
    );
    expect(await axe(container)).toHaveNoViolations();
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));
    expect(await axe(document.body)).toHaveNoViolations();
  });

  it('place aria-expanded / aria-haspopup sur le bouton déclencheur (pas sur un span)', async () => {
    const user = userEvent.setup();
    render(
      <Popover isDialog dialogTitle="Options" content={<p>Contenu</p>}>
        <button>Ouvrir</button>
      </Popover>,
    );
    const trigger = screen.getByRole('button', { name: 'Ouvrir' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('aria-controls', screen.getByRole('dialog').id);
  });

  it('mode dialogue : nom et description valides, focus déplacé dans la popover', async () => {
    const user = userEvent.setup();
    render(
      <Popover isDialog dialogTitle="Options" dialogDescription="Réglages rapides" content={<button>Appliquer</button>}>
        <button>Ouvrir</button>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));
    const dialog = screen.getByRole('dialog', { name: 'Options' });
    expect(dialog).toHaveAccessibleDescription('Réglages rapides');
    expect(dialog).toHaveFocus();
  });

  it('Échap ferme la popover et rend le focus au déclencheur', async () => {
    const user = userEvent.setup();
    render(
      <Popover isDialog dialogTitle="Options" content={<button>Appliquer</button>}>
        <button>Ouvrir</button>
      </Popover>,
    );
    const trigger = screen.getByRole('button', { name: 'Ouvrir' });
    await user.click(trigger);
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('piège le focus en mode dialogue', async () => {
    const user = userEvent.setup();
    render(
      <Popover isDialog dialogTitle="Options" content={<><button>Un</button><button>Deux</button></>}>
        <button>Ouvrir</button>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));
    screen.getByRole('button', { name: 'Deux' }).focus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'Un' })).toHaveFocus();
  });

  it('ne vole pas le focus au montage', () => {
    render(
      <>
        <input aria-label="Champ" autoFocus />
        <Popover content={<p>Contenu</p>}>
          <button>Ouvrir</button>
        </Popover>
      </>,
    );
    expect(screen.getByLabelText('Champ')).toHaveFocus();
  });
});
