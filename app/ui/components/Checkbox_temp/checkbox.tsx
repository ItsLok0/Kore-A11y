'use client';

import { useId, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Text } from '@/app/ui/components/text';
import React from "react";

type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label: string;
    description?: string;
    error?: boolean;
    errorMessage?: string;
    size?: CheckboxSize;
}

const inputSizeStyles: Record<CheckboxSize, string> = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
};

const labelSizeStyles: Record<CheckboxSize, string> = {
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
};

const helperSizeStyles: Record<CheckboxSize, string> = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            label,
            description,
            error,
            errorMessage = 'Ce champ est obligatoire.',
            size = 'md',
            required,
            className,
            ...props
        },
        ref
    ) => {
        const id = useId();
        const errorId = `${id}-error`;
        const descId = `${id}-desc`;

        const ariaDescribedBy = cn(
            description && descId,
            error && errorId
        );

        return (
            <div className={cn("flex flex-col gap-1.5", className)}>
                <label className="group flex items-start cursor-pointer select-none">
                    <div className="flex items-center h-6">
                        <input
                            ref={ref}
                            type="checkbox"
                            required={required}
                            className={cn(
                                "rounded border-slate-300 text-blue-600 focus:ring-blue-600 transition-colors cursor-pointer",
                                inputSizeStyles[size],
                                error && "border-danger"
                            )}
                            aria-describedby={ariaDescribedBy || undefined}
                            aria-invalid={!!error}
                            {...props}
                        />
                    </div>

                    <div className="ml-3 flex flex-col">
                        <Text
                            as="span"
                            className={cn(
                                "font-medium leading-6 group-hover:text-blue-600 transition-colors",
                                labelSizeStyles[size],
                                error ? "text-danger" : "text-slate-900"
                            )}
                        >
                            {label}
                            {required && (
                                <span aria-hidden="true" className="ml-1">*</span>
                            )}
                        </Text>
                        
                        {description && (
                            <Text 
                                id={descId} 
                                as="span"
                                className="text-sm text-slate-500 leading-5"
                            >
                                {description}
                            </Text>
                        )}
                    </div>
                </label>

                {/* Zone d'erreur */}
                <div aria-live="polite" aria-atomic="true">
                    {error && (
                        <Text
                            as="p"
                            id={errorId}
                            className={cn('text-danger font-medium', helperSizeStyles[size])}
                        >
                            {errorMessage}
                        </Text>
                    )}
                </div>
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';