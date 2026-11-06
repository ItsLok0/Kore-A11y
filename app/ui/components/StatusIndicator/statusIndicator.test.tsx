import { render, screen, waitFor } from '@testing-library/react';
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

  it('masque l’icône aux lecteurs d’écran', () => {
    const { container } = render(<StatusIndicator status="success" label="Enregistré" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  describe('annonces (régions live du layout)', () => {
    const regions = (
      <>
        <div id="announcer" role="status" aria-live="polite" />
        <div id="announcer-assertive" role="alert" aria-live="assertive" />
      </>
    );

    it('n’annonce rien au montage, puis annonce le nouveau label dans la région polie', async () => {
      const { rerender } = render(
        <>
          {regions}
          <StatusIndicator status="info" label="Avant" />
        </>,
      );
      expect(document.getElementById('announcer')).toBeEmptyDOMElement();

      rerender(
        <>
          {regions}
          <StatusIndicator status="success" label="Après" />
        </>,
      );
      await waitFor(() => expect(document.getElementById('announcer')).toHaveTextContent('Après'));
      expect(document.getElementById('announcer-assertive')).toBeEmptyDOMElement();
    });

    it('avec critical, annonce dans la région assertive', async () => {
      const { rerender } = render(
        <>
          {regions}
          <StatusIndicator status="success" label="Connecté" critical />
        </>,
      );
      rerender(
        <>
          {regions}
          <StatusIndicator status="danger" label="Connexion perdue" critical />
        </>,
      );
      await waitFor(() =>
        expect(document.getElementById('announcer-assertive')).toHaveTextContent('Connexion perdue'),
      );
      expect(document.getElementById('announcer')).toBeEmptyDOMElement();
    });
  });
});
