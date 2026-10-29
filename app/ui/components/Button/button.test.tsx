import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from './button';

describe('Button', () => {
  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<Button>Enregistrer</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('expose un nom accessible pour un bouton icône seule', async () => {
    const { container } = render(<Button iconOnly={faPlus} aria-label="Ajouter" />);
    expect(screen.getByRole('button', { name: 'Ajouter' })).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('déclenche onClick au clic et au clavier (Entrée)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Valider</Button>);

    await user.click(screen.getByRole('button', { name: 'Valider' }));
    expect(onClick).toHaveBeenCalledTimes(1);

    screen.getByRole('button', { name: 'Valider' }).focus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('indique l’état de chargement avec aria-busy et bloque le clic', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button isLoading onClick={onClick}>
        Envoi
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Envoi' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('est désactivé avec aria-disabled quand disabled est vrai', () => {
    render(<Button disabled>Indisponible</Button>);
    const button = screen.getByRole('button', { name: 'Indisponible' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});
