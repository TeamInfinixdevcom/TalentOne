// packages/ui/src/tokens/colors.ts

/**
 * -----------------------------------------------------------------------------
 * TalentOne Design Tokens
 * Colors v1
 * -----------------------------------------------------------------------------
 * Nunca utilizar colores HEX directamente en los componentes.
 * Todos los componentes deben consumir estos tokens.
 * -----------------------------------------------------------------------------
 */

export const colors = {
  /**
   * Brand
   * Color principal de TalentOne.
   */
  primary: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },

  /**
   * Neutral palette.
   * Base para fondos, textos y superficies.
   */
  neutral: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },

  /**
   * Estados.
   */
  success: {
    500: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
  },

  warning: {
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
  },

  danger: {
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
  },

  /**
   * Superficies.
   * Cards, modales, sidebars, tablas...
   */
  surface: {
    primary: "#FFFFFF",
    secondary: "#F8FAFC",
    tertiary: "#F1F5F9",
  },

  /**
   * Colores para texto.
   */
  text: {
    primary: "#0F172A",
    secondary: "#334155",
    muted: "#64748B",
    inverse: "#FFFFFF",
  },

  /**
   * Bordes.
   */
  border: {
    light: "#F1F5F9",
    default: "#E2E8F0",
    strong: "#CBD5E1",
  },

  /**
   * Overlay para modales.
   */
  overlay: {
    backdrop: "rgba(15, 23, 42, 0.55)",
  },

  white: "#FFFFFF",
  black: "#000000",
} as const;

export type Colors = typeof colors;
