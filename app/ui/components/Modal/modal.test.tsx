import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Modal } from './modal';

function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Ouvrir</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Supprimer" description="Cette action est définitive.">
        <button>Confirmer</button>
        <input aria-label="Motif" />
      </Modal>
    </>
  );
}

describe('Modal', () => {
  it('n’a aucune violation d’accessibilité (axe) une fois ouverte', async () => {
    const { container } = render(
      <Modal isOpen onClose={() => {}} title="Titre" description="Description">
        <p>Contenu</p>
      </Modal>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('expose un dialogue modal nommé et décrit', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Supprimer" description="Cette action est définitive.">
        <p>Contenu</p>
      </Modal>,
    );
    const dialog = screen.getByRole('dialog', { name: 'Supprimer' });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAccessibleDescription('Cette action est définitive.');
  });

  it('piège le focus : Tab sur le dernier élément revient au premier, Maj+Tab inversement', async () => {
    const user = userEvent.setup();
    render(<Demo />);
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));

    const confirm = screen.getByRole('button', { name: 'Confirmer' });
    const close = screen.getByRole('button', { name: /Fermer/ });

    close.focus();
    await user.tab();
    expect(confirm).toHaveFocus();

    await user.tab({ shift: true });
    expect(close).toHaveFocus();
  });

  it('rend le focus au bouton qui a ouvert la modale, même après avoir navigué avec Tab', async () => {
    const user = userEvent.setup();
    render(<Demo />);
    const trigger = screen.getByRole('button', { name: 'Ouvrir' });
    await user.click(trigger);

    await user.tab();
    await user.tab();
    await user.click(screen.getByRole('button', { name: /Fermer/ }));

    expect(trigger).toHaveFocus();
  });

  it('bloque le scroll de la page à l’ouverture et le libère au démontage', () => {
    const { unmount } = render(
      <Modal isOpen onClose={() => {}} title="Titre">
        <p>Contenu</p>
      </Modal>,
    );
    expect(document.documentElement.style.overflowY).toBe('hidden');
    unmount();
    expect(document.documentElement.style.overflowY).toBe('');
  });
});
