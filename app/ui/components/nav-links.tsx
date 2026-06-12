'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Text } from '@/app/ui/components/text';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Typographie', href: '/text' },
    { name: 'Boutton', href: '/button' },
    { name: 'Champs de saisie', href: '/input' },
    { name: 'Checkbox', href: '/checkbox' },
    { name: 'Badge', href: '/badge' },
    { name: 'Status Indicator', href: '/statusIndicator' },
    { name: 'Card', href: '/card' },
    { name: 'Modal', href: '/modal' },
    { name: 'Accordéon', href: '/accordion' },
    { name: 'Onglet', href: '/tab' },
    { name: 'Tooltip & Popover', href: '/tooltip_&_popover' },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="w-full px-4 py-3">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={cn(
                                    'group flex h-10 w-full items-center justify-center rounded-md border-2 px-3 text-sm font-medium',
                                    'border-primary/0 bg-bg-surface hover:bg-primary/80 hover:border-primary/0 focus:bg-primary/80 focus:hover:border-primary/0',
                                    'not-focus:border-primary/80',
                                    isActive && 'bg-primary/80 border-primary/0',
                                )}
                            >
                                <Text
                                    as="span"
                                    className={cn(
                                        'truncate text-center',
                                        'group-hover:text-white group-focus:text-white ',
                                        isActive && 'text-white',
                                    )}
                                >
                                    {link.name}
                                </Text>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}