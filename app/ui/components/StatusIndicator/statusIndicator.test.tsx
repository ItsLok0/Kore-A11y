import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { StatusIndicator } from './statusIndicator';

describe('StatusIndicator', () => {
  it('n’a aucune violation d’accessibilité (axe)', async () => {
    const { container } = render(<StatusIndicator status="success" label="Enregistré" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('le statut est lisible par les technologies d’assistance (texte non masqué)', () => {
    render(<StatusIndicator status="danger" label="Échec de l’envoi" />);
    const text = screen.getByText('Échec de l’envoi');
    expect(text).toBeVisible();
    expect(text.closest('[aria-hidden="true"]')).toBeNull();
  });

  it('en mode srOnly, le texte reste lu par les lecteurs d’écran', () => {
    render(<StatusIndicator status="info" label="Information" srOnly />);
    const text = screen.getByText('Information');
    expect(text).toHaveClass('sr-only');
    expect(text.closest('[aria-hidden="true"]')).toBeNull();
  });

  it('n’utilise pas aria-label sur un élément sans rôle', () => {
    const { container } = render(<StatusIndicator status="loading" label="Chargement" />);
    expect(container.querySelector('[aria-label]')).toBeNull();
  });
});
