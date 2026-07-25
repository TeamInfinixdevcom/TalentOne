import { spacing } from "../../../tokens";
import type { ContainerSize } from "./Container.types";

export const containerBaseStyles = {
  width: "100%",
  margin: "0 auto",
  paddingLeft: spacing[4],
  paddingRight: spacing[4],
  boxSizing: "border-box" as const,
};

export const containerSizes: Record<
  ContainerSize,
  {
    maxWidth: string;
  }
> = {
  sm: {
    maxWidth: "640px",
  },

  md: {
    maxWidth: "768px",
  },

  lg: {
    maxWidth: "1024px",
  },

  xl: {
    maxWidth: "1280px",
  },

  full: {
    maxWidth: "100%",
  },
};
