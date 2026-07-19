/**
 * -----------------------------------------------------------------------------
 * TalentOne Design Tokens
 * Typography v1
 * -----------------------------------------------------------------------------
 * Define la tipografía oficial de TalentOne.
 * Todos los componentes deben consumir estos tokens.
 * -----------------------------------------------------------------------------
 */

export const typography = {
  /**
   * Fuente principal.
   */
  fontFamily: {
    sans: "'Inter', sans-serif",
  },

  /**
   * Tamaños.
   */
  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
  },

  /**
   * Pesos.
   */
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  /**
   * Altura de línea.
   */
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  /**
   * Espaciado entre letras.
   */
  letterSpacing: {
    tighter: "-0.05em",
    normal: "0",
    wide: "0.025em",
  },
} as const;

export type Typography = typeof typography;
