import { cn } from '@/lib/utils';
import { ButtonLink } from '../ui/components/Button/buttonlink';

export default function SkipLink() {
    return (
        <nav
            role='navigation'
            aria-label='Accès rapide'
            className={cn(
                // Classes de base quand le lien est visible
                "bg-bg-page w-full fixed p-4 top-0 left-0 z-50",
                // Classes pour le cacher par défaut et l'afficher au focus
                "-top-20 focus-within:top-1"
            )}  
        >
            <ul className='flex flex-row w-full gap-5'>
                <li className='w-fit'>
                    <ButtonLink
                        href="#main-content"
                        className='p-2'
                    >
                        Aller au contenu principal
                    </ButtonLink>
                </li>
            </ul>
        </nav>
    );
}