import { cn } from "@/lib/utils";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faTriangleExclamation,
  faInfoCircle,
  faCircle,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export type BadgeVariant = "neutral" | "success" | "danger" | "warning" | "info";

// Avec Label
type BadgeWithLabel = {
    children: React.ReactNode;
    icon?: IconDefinition;
    srText?: string;
}

// Icon only
type BadgeIcon = {
    children?: never;
    icon: IconDefinition;
    srText: string;
}

type BadgeContentProps = BadgeWithLabel | BadgeIcon;

type BadgeProps = BadgeContentProps & {
    variant?: BadgeVariant;
    className?: string;
}

const baseStyles = "inline-flex items-center gap-1.5 rounded-full text-xs font-semibold px-2.5 py-1";

// Différentes variantes du bagde
const variantStyles: Record<BadgeVariant, {
    classes: string;
    defaultIcon: IconDefinition;
    defaultPrefix: string;
}> = {
    neutral: {
        classes: "bg-neutral text-neutral-fg!",
        defaultIcon: faCircle,
        defaultPrefix: "Neutre"
    },
    success: {
        classes: "bg-success text-success-fg",
        defaultIcon: faCheckCircle,
        defaultPrefix: "Succès"
    },
    danger: {
        classes: "bg-danger text-danger-fg",
        defaultIcon: faTimesCircle,
        defaultPrefix: "Erreur"
    },
    warning: {
        classes: "bg-warning text-warning-fg",
        defaultIcon: faTriangleExclamation,
        defaultPrefix: "Avertissement"
    },
    info: {
        classes: "bg-info text-info-fg",
        defaultIcon: faInfoCircle,
        defaultPrefix: "Information"
    },
};

// Extrait le texte d'un nœud React (chaîne, nombre, tableau, élément). Ignore le reste.
function getText(node: React.ReactNode): string {
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getText).join("");
    if (React.isValidElement<{ children?: React.ReactNode }>(node)) return getText(node.props.children);
    return "";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            children,
            variant = "info",
            className,
            ...props
        }, ref
    ) => {
        const config = variantStyles[variant];
        const icon   = props.icon ?? config.defaultIcon;

        // Texte de children pour les AT (récursif : gère éléments, nombres et plusieurs enfants)
        const label = getText(children).trim();

        const srText = 'srText' in props ? props.srText : undefined;

        return (
            <span
                ref={ref}
                className={cn(
                    baseStyles,
                    config.classes,
                    className
                )}
                role="status"
            >
                {/* Icône toujours cachée */}
                <FontAwesomeIcon
                    icon={icon}
                    className="w-3 h-3 shrink-0"
                    aria-hidden="true"
                />

                {/* Texte visible */}
                {children && (
                    <span
                        aria-hidden="true"
                    >
                        {children}
                    </span>
                )}

                {/* Texte pour les lecteurs d'écran */}
                <span className="sr-only">
                    {srText ?? `${config.defaultPrefix}${label ? ` : ${label}` : ''}`}
                </span>
            </span>
        );
    }
);

Badge.displayName = "Badge";