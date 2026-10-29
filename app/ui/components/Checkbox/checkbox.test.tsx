import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<Checkbox label="J’accepte les conditions" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('se coche au clic sur le label et à la barre d’espace', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Newsletter" />);
    const box = screen.getByRole('checkbox', { name: 'Newsletter' });

    await user.click(screen.getByText('Newsletter'));
    expect(box).toBeChecked();

    box.focus();
    await user.keyboard(' ');
    expect(box).not.toBeChecked();
  });

  it('relie la description et le message d’erreur au champ', async () => {
    const { container } = render(
      <Checkbox
        label="Conditions"
        description="Lisez les conditions avant de continuer"
        error
        errorMessage="Vous devez accepter"
      />,
    );
    const box = screen.getByRole('checkbox');
    expect(box).toHaveAttribute('aria-invalid', 'true');
    expect(box).toHaveAccessibleDescription(
      'Lisez les conditions avant de continuer Vous devez accepter',
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
