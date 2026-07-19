import { colors, radius, spacing } from "../../tokens";

export const overlayStyles = {
  position: "fixed" as const,
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1000,
};

export const modalStyles = {
  display: "flex",
  flexDirection: "column" as const,
  gap: spacing[4],
  minWidth: "400px",
  maxWidth: "600px",
  width: "100%",
  padding: spacing[6],
  borderRadius: radius.lg,
  backgroundColor: colors.surface.primary,
  border: `1px solid ${colors.border.default}`,
  boxShadow: "0 10px 25px rgba(0,0,0,.15)",
};
