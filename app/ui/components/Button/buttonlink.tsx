import { cn } from '@/lib/utils';
import Link, { type LinkProps } from 'next/link';
import React from 'react';
import { ButtonSize } from '@/app/ui/components/Button/button';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'ghost'
  | 'outline'
  | 'link';

interface ButtonLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children?: React.ReactNode;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
  variant?: ButtonVariant;
  iconRight?: IconDefinition;
  iconLeft?: IconDefinition;
  iconOnly?: IconDefinition;
  ariaLabel?: string;
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

const baseStyles = [
    'relative inline-flex items-center justify-center',
    'font-medium leading-none rounded-md',
    'select-none whitespace-nowrap',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:none',
    'focus-visible:outline-none focus-visible:shadow-(--focus-ring) focus:underline hover:underline',
    'not-disabled:active:scale-[0.99]',
].join(' ');

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      size = 'md',
      variant = 'link',
      external = false,
      href,
      iconLeft,
      iconRight,
      iconOnly,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <Link
        ref={ref}
        tabIndex={0}
        href={href}
        className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className
        )}
        aria-label={iconOnly ? (ariaLabel || (typeof children === 'string' ? children : undefined)) : ariaLabel}
        {...externalProps}
        {...props}
      >
        <span className='flex items-center justify-center gap-[inherit]'>
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

          {/* Pour les liens externes */}
          {external && (
            <span className="sr-only">(ouvre dans un nouvel onglet)</span>
          )}
        </span>
      </Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';