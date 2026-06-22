export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const LINKS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Test', href: '#',
      children: [
        { label: 'Typographie', href: '/text' },
        { label: 'Champs de saisie', href: '/input' },
      ]
    },
    { label: 'Boutton', href: '/button' },
    { label: 'Champs de saisie', href: '/input' },
    { label: 'Checkbox', href: '/checkbox' },
    { label: 'Badge', href: '/badge' },
    { label: 'Status Indicator', href: '/statusIndicator' },
    { label: 'Card', href: '/card' },
    { label: 'Modal', href: '/modal' },
    { label: 'Accordéon', href: '/accordion' },
    { label: 'Onglet', href: '/tab' },
    { label: 'Tooltip & Popover', href: '/tooltip_&_popover' },
    { label: 'Breadcrumb', href: '/breadcrumb' }
]