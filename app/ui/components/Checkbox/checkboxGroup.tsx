'use client';

import { useId, forwardRef } from 'react';
import React from "react";
import { cn } from '@/lib/utils';
import { Text } from '@/app/ui/components/text';

type CheckboxSize = 'sm' | 'md' | 'lg';

interface CheckboxOption {
    value: string;
    label: string;
    description?: string;
}

export interface CheckboxGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'size'> {
    legend: string;
    options: CheckboxOption[];
    description?: string;
    name: string;
    error?: boolean;
    errorMessage?: string;
    size?: CheckboxSize;
    required?: boolean;
}

const helperSizeStyles: Record<CheckboxSize, string> = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
};

const inputSizeStyles: Record<CheckboxSize, string> = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
};

export const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      legend,
      description,
      name,
      options,
      error,
      errorMessage = 'Ce champ est obligatoire.',
      size = 'md',
      required = false,
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
      <fieldset
        ref={ref}
        className={cn(
            "flex flex-col gap-4 border-none p-0 m-0",
            className
        )}
        aria-describedby={ariaDescribedBy || undefined}
        aria-required={required ? 'true' : undefined}
        {...props}
      >
        <div className="space-y-1">
          <Text as="legend">
            {legend}
            {required && (
              <span aria-hidden="true" className="ml-1">*</span>
            )}
          </Text>
          {description && (
            <Text id={descId} as="p" className="text-sm text-text-secondary">
              {description}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <label
              key={option.value}
              className="group flex items-start cursor-pointer select-none"
            >
              <div className="flex items-center h-6">
                <input
                  type="checkbox"
                  name={name}
                  value={option.value}
                  className={cn(
                    "rounded border-slate-300 text-blue-600 focus:ring-blue-600 transition-colors",
                    inputSizeStyles[size],
                    error && "border-danger"
                  )}
                />
              </div>
              
              <div className="ml-3 flex flex-col">
                <Text
                  as="span"
                  className={cn(
                    "font-medium leading-6 group-hover:text-blue-600 transition-colors",
                    size === 'lg' ? 'text-base' : 'text-sm',
                    error ? "text-danger" : "text-slate-900"
                  )}
                >
                  {option.label}
                </Text>
                {option.description && (
                  <Text as="p" className="text-sm text-slate-500 leading-5">
                    {option.description}
                  </Text>
                )}
              </div>
            </label>
          ))}
        </div>

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
      </fieldset>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';