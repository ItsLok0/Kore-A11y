import { cn } from '@/lib/utils';
import { ButtonLink } from '../ui/components/Button/buttonlink';

export  default function SkipLink() {
    return (
        <div className="skipLink">
            <ButtonLink
                href="#main-content"
                tabIndex={0}
                className={cn(
                    'sr-only focus:not-sr-only!',
                    'bg-primary text-primary-fg! underline',
                    'px-4 py-2 m-2'
                )}
            >
                Aller au contenu principal
            </ButtonLink>
        </div>
    );
}