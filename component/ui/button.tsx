'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'ghost'
  | 'outline'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isLoading?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
}

// Création des styles de chaque variante de bouton
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-fg border border-primary ' +
    'hover:bg-primary-hover hover:border-primary-hover ' +
    'active:bg-primary-active',
 
  secondary:
    'bg-secondary text-secondary-fg border border-secondary ' +
    'hover:bg-secondary-hover hover:border-secondary-hover ' +
    'active:bg-secondary-active',
 
  danger:
    'bg-danger text-danger-fg border border-danger ' +
    'hover:bg-danger-hover hover:border-danger-hover ' +
    'active:bg-danger-active',
 
  success:
    'bg-success text-success-fg border border-success ' +
    'hover:bg-success-hover hover:border-success-hover ' +
    'active:bg-success-active',
 
  ghost:
    'bg-transparent text-text-primary border border-transparent ' +
    'hover:bg-ghost-hover ' +
    'active:bg-ghost-active',
 
  outline:
    'bg-transparent text-primary border border-primary ' +
    'hover:bg-primary-subtle ' +
    'active:bg-primary-subtle',
 
  link:
    'bg-transparent text-text-link border-none ' +
    'underline underline-offset-4 ' +
    'hover:text-text-link-hover ' +
    'active:opacity-80 ' +
    'h-auto! px-0!',
}

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm gap-1.5',
    md: 'h-10 px-4 text-base gap-2',
    lg: 'h-12 px-6 text-lg gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
        children,
        className,
        isLoading,
        disabled,
        variant='primary',
        size='md',
        fullWidth=false,
        'aria-label': ariaLabel,
        ...props
    }, ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
        <button
            ref={ref}
            disabled={isDisabled}
            aria-busy={isLoading}
            aria-label={ariaLabel}
            className={cn(
                'relative inline-flex items-center justify-center',
                'font-medium leading-none rounded-md',
                'select-none whitespace-nowrap',
                'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
                'focus-visible:outline-none focus-visible:shadow-(--focus-ring)',
                'active:scale-[0.99]',
                variantStyles[variant],
                sizeStyles[size],
                fullWidth && 'w-full',
                className,
            )}
            {...props}
        >
            <span className={cn(isLoading && 'opacity-80')}>
                {children}
            </span>
        </button>
    );
  }
);

Button.displayName = 'Button';