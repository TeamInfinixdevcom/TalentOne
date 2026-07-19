import { colors } from "../../tokens";
import type { SpinnerSize } from "./Spinner.types";

export const spinnerBaseStyles = {
  display: "inline-block",
  borderStyle: "solid" as const,
  borderColor: colors.border.default,
  borderTopColor: colors.primary[600],
  borderRadius: "50%",
  animation: "spin 0.8s linear infinite",
};

export const spinnerSizes: Record<
  SpinnerSize,
  {
    width: string;
    height: string;
    borderWidth: string;
  }
> = {
  sm: {
    width: "16px",
    height: "16px",
    borderWidth: "2px",
  },

  md: {
    width: "24px",
    height: "24px",
    borderWidth: "3px",
  },

  lg: {
    width: "40px",
    height: "40px",
    borderWidth: "4px",
  },
};
