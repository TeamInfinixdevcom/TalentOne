/**
 * -----------------------------------------------------------------------------
 * TalentOne Design Tokens
 * Shadows
 * -----------------------------------------------------------------------------
 * Nunca utilizar box-shadow directamente en los componentes.
 * Todos los componentes deben consumir estos tokens.
 * -----------------------------------------------------------------------------
 */

export const shadows = {
  xs: "0 1px 2px rgba(15,23,42,.05)",
  sm: "0 1px 3px rgba(15,23,42,.10)",
  md: "0 4px 6px rgba(15,23,42,.10)",
  lg: "0 10px 15px rgba(15,23,42,.12)",
  xl: "0 20px 25px rgba(15,23,42,.15)",
} as const;

export type Shadows = typeof shadows;
