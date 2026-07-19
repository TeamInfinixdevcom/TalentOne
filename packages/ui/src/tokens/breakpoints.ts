/**
 * -----------------------------------------------------------------------------
 * TalentOne Design Tokens
 * Breakpoints v1
 * -----------------------------------------------------------------------------
 * Define los puntos de quiebre para el diseño responsive.
 * Todos los layouts y componentes deben consumir estos valores.
 * -----------------------------------------------------------------------------
 */

export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export type Breakpoints = typeof breakpoints;
