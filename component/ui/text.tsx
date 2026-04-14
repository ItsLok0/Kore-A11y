import { cn } from '@/lib/utils';
import { forwardRef, createElement } from 'react';

type TextVariant = 'body' | 'small' | 'lead' | 'code' | 'caption';
type TextTag = 'p' | 'span' | 'small' | 'figcaption' | 'code' | 'label' | 'legend';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: TextTag;
    variant?: TextVariant;
}

const variantStyles: Record<TextVariant, string> = {
    body:    'text-base leading-body text-text-primary',
    small:   'text-sm font-medium leading-body',
    lead:    'text-xl text-text-secondary leading-body',
    code:    'relative rounded-sm bg-primary-subtle px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary border border-border-subtle',
    caption: 'text-xs text-text-muted uppercase tracking-wider leading-body',
};

const defaultTag: Record<TextVariant, TextTag> = {
    body:    'p',
    lead:    'p',
    small:   'p',
    caption: 'span',
    code:    'code',
};

export const Text = forwardRef<HTMLElement, TextProps>(
    (
        {
            children,
            variant = 'body',
            as,
            className,
            ...props
        }, ref
    ) => {
        const tag = as ?? defaultTag[variant];

        return createElement(
            tag,
            {
                ref,
                className: cn(variantStyles[variant], className),
                ...props,
            },
            children,
        );
    },
);

Text.displayName = 'Text';