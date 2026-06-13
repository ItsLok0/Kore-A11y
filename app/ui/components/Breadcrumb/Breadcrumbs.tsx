'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { ButtonLink } from '../Button/buttonlink'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Breadcrumbs() {
  const rawSegments = useSelectedLayoutSegments();
  const segments = rawSegments.filter(s => !s.startsWith('('));

  if (segments.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Fil d'Ariane">
      <ol className="flex items-center gap-1 list-none m-0 p-0 flex-wrap">

        {/* Accueil */}
        <li>
          <ButtonLink href="/" variant="ghost" size="sm">
            Accueil
          </ButtonLink>
        </li>

        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const label = capitalize(segment.replace(/-|_/g, ' '));
          const isLast = index === segments.length - 1;

          return (
            <React.Fragment key={index}>
              {/* Séparateur dans un li — HTML valide */}
              <li
                aria-hidden="true"
                className="text-text-muted select-none px-0.5"
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </li>

              <li {...(isLast ? { 'aria-current': 'page' } : {})}>
                {isLast ? (
                  <span className="px-2 py-1 text-sm font-semibold text-text-primary">
                    {label}
                  </span>
                ) : (
                  <ButtonLink href={href} variant="ghost" size="sm">
                    {label}
                  </ButtonLink>
                )}
              </li>
            </React.Fragment>
          );
        })}

      </ol>
    </nav>
  );
}