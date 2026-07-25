import type { CSSProperties } from "react";

import {
  colors,
  radius,
  shadows,
  spacing,
  typography,
} from "../../../tokens";

export const drawerStyles: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 1300,
};

export const overlayStyles: CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundColor: colors.overlay.backdrop,
};

export const contentStyles: CSSProperties = {
  position: "absolute",
  right: 0,
  top: 0,
  width: "420px",
  height: "100%",
  backgroundColor: colors.surface.primary,
  boxShadow: shadows.xl,
  display: "flex",
  flexDirection: "column",
};

export const headerStyles: CSSProperties = {
  padding: spacing[6],
  borderBottom: `1px solid ${colors.border.default}`,
};

export const titleStyles: CSSProperties = {
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.bold,
  color: colors.text.primary,
};

export const descriptionStyles: CSSProperties = {
  marginTop: spacing[2],
  color: colors.text.muted,
  fontSize: typography.fontSize.sm,
};

export const bodyStyles: CSSProperties = {
  flex: 1,
  padding: spacing[6],
  overflowY: "auto",
};

export const footerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: spacing[3],
  padding: spacing[6],
  borderTop: `1px solid ${colors.border.default}`,
};

export const closeStyles: CSSProperties = {
  cursor: "pointer",
  color: colors.text.secondary,
  fontSize: typography.fontSize.lg,
};
