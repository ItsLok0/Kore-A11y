'use client';

import { cn } from '@/lib/utils';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import React from "react";

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
    children?: React.ReactNode;
    isLoading?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    iconRight?: IconDefinition;
    iconLeft?: IconDefinition;
    iconOnly?: IconDefinition;
}

export const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-fg border border-primary ' +
    'not-disabled:hover:bg-primary-hover not-disabled:hover:border-primary-hover ' +
    'not-disabled:active:bg-primary-active',
 
  secondary:
    'bg-secondary text-secondary-fg border border-secondary ' +
    'not-disabled:hover:bg-secondary-hover not-disabled:hover:border-secondary-hover ' +
    'not-disabled:active:bg-secondary-active',
 
  danger:
    'bg-danger text-danger-fg border border-danger ' +
    'not-disabled:hover:bg-danger-hover not-disabled:hover:border-danger-hover ' +
    'not-disabled:active:bg-danger-active',
 
  success:
    'bg-success text-success-fg border border-success ' +
    'not-disabled:hover:bg-success-hover not-disabled:hover:border-success-hover ' +
    'not-disabled:active:bg-success-active',
 
  ghost:
    'bg-transparent text-text-primary border border-transparent ' +
    'not-disabled:hover:bg-ghost-hover ' +
    'not-disabled:active:bg-ghost-active',
 
  outline:
    'bg-transparent text-primary border border-primary ' +
    'not-disabled:hover:bg-primary-subtle ' +
    'not-disabled:active:bg-primary-subtle',
 
  link:
    'bg-transparent text-text-link border-none ' +
    'underline underline-offset-4 ' +
    'not-disabled:hover:text-text-link-hover ' +
    'not-disabled:active:opacity-80 ' +
    'h-auto! px-0!',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm gap-1.5',
    md: 'h-10 px-4 text-base gap-2',
    lg: 'h-12 px-6 text-lg gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
        children,
        className,
        isLoading = false,
        disabled,
        variant = 'primary',
        size = 'md',
        fullWidth = false,
        iconLeft,
        iconRight,
        iconOnly,
        'aria-label': ariaLabel,
        ...props
    }, ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
        <button
            ref={ref}
            tabIndex={0}
            disabled={disabled}
            aria-disabled={isDisabled}
            aria-busy={isLoading}
            aria-label={iconOnly ? (ariaLabel || (typeof children === 'string' ? children : undefined)) : ariaLabel}
            className={cn(
                'relative inline-flex items-center justify-center',
                'font-medium leading-none rounded-md',
                'select-none whitespace-nowrap overflow-hidden',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'focus-visible:outline-none focus-visible:shadow-(--focus-ring)',
                'not-disabled:active:scale-[0.98]',
                variantStyles[variant],
                sizeStyles[size],
                fullWidth && 'w-full',
                iconOnly && 'aspect-square px-0',
                className,
            )}
            {...props}
        >
            <span 
              className={cn(
                'flex items-center justify-center gap-[inherit]',
                isLoading ? 'opacity-0' : 'opacity-100'
              )}
            >
              {iconOnly ? (
                <FontAwesomeIcon icon={iconOnly} className="w-[1.1em] h-[1.1em]" aria-hidden="true" />
              ) : (
                <>
                  {iconLeft && (
                    <FontAwesomeIcon icon={iconLeft} className="w-[1em] h-[1em]" aria-hidden="true" />
                  )}
                  {children}
                  {iconRight && (
                    <FontAwesomeIcon icon={iconRight} className="w-[1em] h-[1em]" aria-hidden="true" />
                  )}
                </>
              )}
            </span>

            {/* Spinner Overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <FontAwesomeIcon 
                  icon={faCircleNotch} 
                  className="animate-spin w-[1.2em] h-[1.2em]" 
                />
              </div>
            )}
        </button>
    );
  }
);

Button.displayName = 'Button';