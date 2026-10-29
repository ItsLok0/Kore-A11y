import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Input } from './input';

describe('Input', () => {
  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<Input label="Adresse e-mail" type="email" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('associe le label au champ', async () => {
    const user = userEvent.setup();
    render(<Input label="Prénom" />);
    const field = screen.getByLabelText('Prénom');
    await user.type(field, 'Pierre');
    expect(field).toHaveValue('Pierre');
  });

  it('relie la description au champ via aria-describedby', () => {
    render(<Input label="Mot de passe" description="8 caractères minimum" />);
    const field = screen.getByLabelText('Mot de passe');
    const description = screen.getByText('8 caractères minimum');
    expect(field).toHaveAttribute('aria-describedby', description.id);
  });

  it('signale l’erreur avec aria-invalid et un message role="alert"', async () => {
    const { container } = render(
      <Input label="Nom" error errorMessage="Le nom est obligatoire" />,
    );
    const field = screen.getByLabelText('Nom');
    expect(field).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Le nom est obligatoire');
    expect(field).toHaveAccessibleDescription('Le nom est obligatoire');
    expect(await axe(container)).toHaveNoViolations();
  });

  it('masque l’astérisque aux lecteurs d’écran quand le champ est requis', () => {
    render(<Input label="Ville" required />);
    expect(screen.getByLabelText(/Ville/)).toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });
});
