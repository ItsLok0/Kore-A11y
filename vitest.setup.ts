import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import * as axeMatchers from 'vitest-axe/matchers';

// Ajoute le matcher expect(...).toHaveNoViolations() (vitest-axe)
expect.extend(axeMatchers);

// jsdom n'implémente pas canvas ; axe l'appelle pour certaines vérifications (contraste).
HTMLCanvasElement.prototype.getContext = (() => null) as typeof HTMLCanvasElement.prototype.getContext;
