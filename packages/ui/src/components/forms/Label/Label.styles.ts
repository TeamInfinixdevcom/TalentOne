import type { CSSProperties } from "react";

import {
  colors,
  typography,
} from "../../../tokens";

export const labelStyles: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  color: colors.text.primary,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
};

export const requiredStyles: CSSProperties = {
  color: colors.danger[500],
};
