'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Text } from '@/app/ui/components/text';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Typographie', href: '/text' },
    { name: 'Boutton', href: '/button' },
    { name: 'Inputs & \n Textareas', href: '/input' },
    { name: 'Checkbox', href: '/checkbox' },
    { name: 'Badge', href: '/badge' },
    { name: 'Status Indicator', href: '/statusIndicator' },
    { name: 'Card', href: '/card' },
    { name: 'Modal', href: '/modal' },
    { name: 'Accordion', href: '/accordion' },
    { name: 'Tab', href: '/tab' },
];
 
export default function NavLinks() {
    const pathname = usePathname();
 
    return (
        <nav className="flex gap-4 p-4 justify-center">
            { links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        tabIndex={0}
                        href={link.href}
                        className={cn(
                        'group flex h-12 grow items-center justify-center gap-2 rounded-md bg-bg-surface border-2 border-primary/0 not-focus:border-primary/80 hover:border-primary/0 p-3 text-sm font-medium hover:bg-primary/80 focus:bg-primary/80 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-primary/80 border-primary/0 not-focus:border-primary/0': pathname === link.href,
                        },
                        )}
                    >
                        <Text
                            as='p'
                            className={cn(  
                                'group-hover:text-white group-focus:text-white', 
                                pathname === link.href ? 'text-white' : 'text-text-primary'
                            )}
                        >
                            {link.name}
                        </Text>
                    </Link>
                );
            })}
        </nav>
    );
}