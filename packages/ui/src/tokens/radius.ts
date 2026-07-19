/**
 * -----------------------------------------------------------------------------
 * TalentOne Design Tokens
 * Border Radius v1
 * -----------------------------------------------------------------------------
 * Define los radios utilizados en toda la aplicación.
 * Nunca utilizar valores fijos en los componentes.
 * -----------------------------------------------------------------------------
 */

export const radius = {
  none: "0rem",

  xs: "0.125rem",   // 2px
  sm: "0.25rem",    // 4px
  md: "0.5rem",     // 8px
  lg: "0.75rem",    // 12px
  xl: "1rem",       // 16px
  "2xl": "1.5rem",  // 24px

  full: "9999px",
} as const;

export type Radius = typeof radius;
