import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { TextArea } from './textarea';

describe('TextArea', () => {
  it('n’a aucune violation d’accessibilité (axe), y compris en erreur', async () => {
    const { container } = render(<TextArea label="Message" description="500 caractères max" error errorMessage="Message trop court" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('associe label, description et erreur au champ', () => {
    render(<TextArea label="Message" description="500 caractères max" error errorMessage="Message trop court" />);
    const field = screen.getByLabelText('Message');
    expect(field).toHaveAttribute('aria-invalid', 'true');
    expect(field).toHaveAccessibleDescription(/Message trop court/);
    expect(screen.getByRole('alert')).toHaveTextContent('Message trop court');
  });
});
