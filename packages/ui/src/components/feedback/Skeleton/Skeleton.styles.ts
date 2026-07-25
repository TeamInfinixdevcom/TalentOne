import type { CSSProperties } from "react";

import {
  colors,
  radius,
} from "../../../tokens";

import type { SkeletonVariant } from "./Skeleton.types";

export const skeletonBaseStyles: CSSProperties = {
  backgroundColor: colors.neutral[200],
  overflow: "hidden",
  position: "relative",
};

export const skeletonVariants: Record<
  SkeletonVariant,
  CSSProperties
> = {
  text: {
    width: "100%",
    height: "1rem",
    borderRadius: radius.sm,
  },

  rectangular: {
    borderRadius: radius.md,
  },

  circular: {
    borderRadius: "50%",
  },
};

export const shimmerStyles: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent)",
  animation: "talentone-skeleton 1.4s infinite",
};
