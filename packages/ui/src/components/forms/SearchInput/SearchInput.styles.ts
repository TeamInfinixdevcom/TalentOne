import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

export const wrapperStyles: CSSProperties = {
  position: "relative",
  width: "100%",
};

export const inputStyles: CSSProperties = {
  width: "100%",
  padding: `${spacing[3]} ${spacing[4]} ${spacing[3]} 40px`,
  border: `1px solid ${colors.border.default}`,
  borderRadius: radius.md,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  outline: "none",
  boxSizing: "border-box",
};

export const iconStyles: CSSProperties = {
  position: "absolute",
  left: spacing[3],
  top: "50%",
  transform: "translateY(-50%)",
  color: colors.text.secondary,
  pointerEvents: "none",
  fontSize: "16px",
};
