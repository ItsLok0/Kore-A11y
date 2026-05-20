'use client';

import { useEffect, useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faTriangleExclamation,
  faInfoCircle,
  faCircle,
  faSpinner,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useAnnouncer } from '@/app/hooks/useAnnouncer';

export type StatusVariant =
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'loading';

interface StatusIndicatorProps {
  status: StatusVariant;
  label: string;
  srOnly?: boolean;
  critical?: boolean;
  className?: string;
}

const statusConfig: Record<StatusVariant, {
  icon: IconDefinition;
  iconClass: string;
  spin?: boolean;
}> = {
  success: { icon: faCheckCircle, iconClass: 'text-success' },
  danger: { icon: faTimesCircle, iconClass: 'text-danger' },
  warning: { icon: faTriangleExclamation, iconClass: 'text-warning' },
  info: { icon: faInfoCircle, iconClass: 'text-info' },
  neutral: { icon: faCircle, iconClass: 'text-secondary' },
  loading: { icon: faSpinner, iconClass: 'text-primary', spin: true },
};

export const StatusIndicator = forwardRef<HTMLSpanElement, StatusIndicatorProps>(function StatusIndicator(
  { status, label, srOnly = false, critical = false, className },
  ref
) {
  const config = statusConfig[status];
  const { announce } = useAnnouncer();
  const isFirstRender = useRef(true);

  // Annonce le changement à chaque update
  useEffect(() => {
    // On empeche la première annonce au montage du composant
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    announce(label, critical);
  }, [status, label, announce, critical]);

  return (
    <span aria-label={label} ref={ref} className={cn('inline-flex items-center gap-2', className)}>
      <FontAwesomeIcon
        icon={config.icon}
        className={cn(
          'h-4 w-4 shrink-0',
          config.iconClass,
          config.spin && 'motion-safe:animate-spin',
        )}
        aria-hidden="true"
      />
      <span aria-hidden="true" className={cn('text-sm font-medium', srOnly && 'sr-only')}>
        {label}
      </span>
    </span>
  );
});