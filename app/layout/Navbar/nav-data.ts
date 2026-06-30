export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const LINKS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Atomes',
    children: [
      { label: 'Bouton', href: '/button' },
      { label: 'Typographie', href: '/text' },
      { label: 'Champs de saisie', href: '/input' },
      { label: 'Checkbox', href: '/checkbox' },
      { label: 'Badge', href: '/badge' },
      { label: 'Status Indicator', href: '/statusIndicator' },
    ],
  },
  {
    label: 'Patterns ARIA',
    children: [
      { label: 'Card', href: '/card' },
      { label: 'Modal', href: '/modal' },
      { label: 'Accordéon', href: '/accordion' },
      { label: 'Onglets', href: '/tab' },
      { label: 'Tooltip & Popover', href: '/tooltip_&_popover' },
      { label: 'Breadcrumb', href: '/breadcrumb' },
    ],
  },
  {
    label: 'Global UI',
    children: [
      { label: 'Navbar', href: '/navbar' },
    ],
  },
]