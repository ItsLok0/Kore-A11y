import 'vitest';

interface AxeMatchers {
  toHaveNoViolations(): void;
}

declare module 'vitest' {
  // `T` doit rester déclaré : la fusion d'interfaces exige les mêmes paramètres de type que Vitest
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
  interface Assertion<T = unknown> extends AxeMatchers {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}
