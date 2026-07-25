import type { CSSProperties } from "react";

import {
  colors,
  radius,
  spacing,
  typography,
} from "../../../tokens";

import type { TooltipPlacement } from "./Tooltip.types";

export const wrapperStyles: CSSProperties = {
  position: "relative",
  display: "inline-block",
};

export const tooltipBaseStyles: CSSProperties = {
  position: "absolute",
  zIndex: 9999,
  whiteSpace: "nowrap",
  padding: `${spacing[2]} ${spacing[3]}`,
  borderRadius: radius.sm,
  backgroundColor: colors.neutral[900],
  color: colors.white,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.xs,
  pointerEvents: "none",
  opacity: 0,
  visibility: "hidden",
  transition: "all .2s ease",
};

export const tooltipPlacements: Record<
  TooltipPlacement,
  CSSProperties
> = {
  top: {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  bottom: {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  left: {
    right: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)",
  },

  right: {
    left: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)",
  },
};
