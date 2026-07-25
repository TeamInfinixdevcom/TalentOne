import type { CSSProperties } from "react";

import {
  colors,
  spacing,
  typography,
} from "../../../tokens";

import type { TimelineDotProps } from "./Timeline.types";

export const timelineStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
};

export const timelineItemStyles: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: spacing[4],
};

export const timelineSeparatorStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: 0,
};

export const timelineContentStyles: CSSProperties = {
  flex: 1,
  minWidth: 0,
};

export const timelineTitleStyles: CSSProperties = {
  margin: 0,
  color: colors.text.primary,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.semibold,
};

export const timelineDescriptionStyles: CSSProperties = {
  marginTop: spacing[1],
  color: colors.text.secondary,
  fontSize: typography.fontSize.sm,
};

export const timelineConnectorStyles: CSSProperties = {
  width: 2,
  flex: 1,
  minHeight: 32,
  backgroundColor: colors.border.default,
};

export const getTimelineDotStyles = (
  colorScheme: TimelineDotProps["colorScheme"] = "primary"
): CSSProperties => {
  const palette = {
    primary: colors.primary[500],
    success: colors.success[500],
    warning: colors.warning[500],
    danger: colors.danger[500],
    neutral: colors.neutral[500],
  };

  return {
    width: 14,
    height: 14,
    borderRadius: "50%",
    backgroundColor: palette[colorScheme],
    border: `2px solid ${colors.surface.primary}`,
    boxSizing: "border-box",
  };
};
