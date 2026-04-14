'use client';

import { cn } from '@/lib/utils';
import { forwardRef, useId } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label: string;
    error?: string;
    description?: string;
    size?: InputSize;
}

const sizeStyles: Record<InputSize, string> = {
    sm: 'h-8  px-2.5 text-sm  gap-1.5',
    md: 'h-10 px-3   text-base gap-2',
    lg: 'h-12 px-4   text-lg   gap-2.5',
};

const labelSizeStyles: Record<InputSize, string> = {
    sm: 'text-xs font-medium',
    md: 'text-sm font-medium',
    lg: 'text-base font-medium',
};

const helperSizeStyles: Record<InputSize, string> = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            className,
            error,
            description,
            size = 'md',
            ...props
        }, ref
    ) => {
        const inputId = id ?? useId();
        const errorId    = `${inputId}-error`;
        const descId     = `${inputId}-desc`;
        const describedBy = error ? errorId : description ? descId : undefined;

        return (
            <div className="w-full flex flex-col gap-1.5">
                <label
                    htmlFor={inputId}
                    className={cn(
                        'text-text-primary leading-none select-none',
                        labelSizeStyles[size]
                    )}
                >
                    {label}
                </label>
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'w-full rounded-md border bg-[var(--color-bg-surface)]',
                        'font-sans transition-colors duration-200',
                        'border-[var(--color-border-default)]',
                        'text-[var(--color-text-primary)]',
                        'placeholder:text-[var(--color-text-muted)]',
                        'focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]',
                        'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-ghost-hover)]',
                        sizeStyles[size],
                        "flex h-10 w-full rounded-md border",
                        error && "border-red-500 focus-visible:ring-red-500", // Style d'erreur
                        className
                    )}
                    aria-describedby={error ? `${inputId}-error` : description ? `${inputId}-desc` : undefined}
                    aria-invalid={!!error}
                    {...props}
                />
                {/* Message d'aide ou d'erreur */}
                {description && !error && (
                    <p id={`${inputId}-desc`} className="text-xs text-slate-500">
                        {description}
                    </p>
                )}
                {error && (
                    <p id={`${inputId}-error`} className="text-xs font-medium text-red-500">
                        {error}
                    </p>
                )}
            </div>
        )
    }
);

Input.displayName = 'Input';