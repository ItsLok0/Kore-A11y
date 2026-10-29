import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { faCheckCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Heading } from './heading';
import { Text } from './text';
import { Badge } from './badge';
import { Card } from './Card/card';
import { ButtonLink } from './Button/buttonlink';
import SkipLink from '@/app/layout/skip-link';

describe('Heading', () => {
  it('rend le bon niveau de titre, indépendamment du style visuel', async () => {
    const { container } = render(<Heading as="h2" level={5}>Titre</Heading>);
    expect(screen.getByRole('heading', { level: 2, name: 'Titre' })).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('Text', () => {
  it('peut servir de label relié à un champ (htmlFor)', async () => {
    const { container } = render(
      <>
        <Text as="label" htmlFor="x">Prénom</Text>
        <input id="x" />
      </>,
    );
    expect(screen.getByLabelText('Prénom')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('Badge', () => {
  it('n’a aucune violation (avec texte, avec icône + texte, icône seule avec srText)', async () => {
    const { container } = render(
      <>
        <Badge variant="success">Validé</Badge>
        <Badge variant="info" icon={faCheckCircle}>Info</Badge>
        <Badge variant="danger" icon={faCheckCircle} srText="Erreur" />
      </>,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByText('Erreur')).toBeInTheDocument();
  });

  it('ne dépend pas de la couleur seule : le sens est porté par du texte', () => {
    render(<Badge variant="danger">Refusé</Badge>);
    expect(screen.getByText('Refusé')).toBeVisible();
  });
});

describe('Card', () => {
  it('n’a aucune violation (statique et cliquable) et utilise un titre', async () => {
    const { container } = render(
      <>
        <Card title="Statique"><p>Contenu</p></Card>
        <Card title="Lien" href="/page"><p>Contenu</p></Card>
      </>,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(screen.getByRole('heading', { name: 'Lien' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Lien' })).toHaveAttribute('href', '/page');
  });
});

describe('ButtonLink', () => {
  it('n’a aucune violation (texte, icône seule nommée, lien externe)', async () => {
    const { container } = render(
      <>
        <ButtonLink href="/a">Page A</ButtonLink>
        <ButtonLink href="/b" iconOnly={faEnvelope} ariaLabel="Écrire" />
        <ButtonLink href="https://example.com" external>Site</ButtonLink>
      </>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('annonce l’ouverture dans un nouvel onglet pour un lien externe', () => {
    render(<ButtonLink href="https://example.com" external>Site</ButtonLink>);
    const link = screen.getByRole('link', { name: /Site/ });
    expect(link).toHaveAccessibleName('Site (ouvre dans un nouvel onglet)');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('SkipLink', () => {
  it('propose un lien d’évitement vers le contenu principal', async () => {
    const { container } = render(<SkipLink />);
    expect(screen.getByRole('link', { name: 'Aller au contenu principal' })).toHaveAttribute('href', '#main-content');
    expect(await axe(container, { rules: { region: { enabled: false } } })).toHaveNoViolations();
  });
});
