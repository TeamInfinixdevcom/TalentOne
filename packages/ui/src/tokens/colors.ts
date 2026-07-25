// packages/ui/src/tokens/colors.ts

/**
 * -----------------------------------------------------------------------------
 * TalentOne Design Tokens
 * Colors v2
 * -----------------------------------------------------------------------------
 * Nunca utilizar colores HEX directamente en los componentes.
 * Todos los componentes deben consumir estos tokens.
 * -----------------------------------------------------------------------------
 */

export const colors = {
  /**
   * Brand
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
   * Neutral
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
   * Success
   */
  success: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
  },

  /**
   * Warning
   */
  warning: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
  },

  /**
   * Danger
   */
  danger: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },

  /**
   * Surfaces
   */
  surface: {
    primary: "#FFFFFF",
    secondary: "#F8FAFC",
    tertiary: "#F1F5F9",
  },

  /**
   * Text
   */
  text: {
    primary: "#0F172A",
    secondary: "#334155",
    muted: "#64748B",
    inverse: "#FFFFFF",
  },

  /**
   * Borders
   */
  border: {
    light: "#F1F5F9",
    default: "#E2E8F0",
    strong: "#CBD5E1",
  },

  /**
   * Overlay
   */
  overlay: {
    backdrop: "rgba(15, 23, 42, 0.55)",
  },

  white: "#FFFFFF",
  black: "#000000",
} as const;

export type Colors = typeof colors;
