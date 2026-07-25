import { colors, spacing } from "../../../tokens";
import type { DividerOrientation } from "./Divider.types";

export const dividerBaseStyles = {
  border: "none",
  backgroundColor: colors.border.default,
  flexShrink: 0,
};

export const dividerOrientations: Record<
  DividerOrientation,
  {
    width: string;
    height: string;
    margin: string;
  }
> = {
  horizontal: {
    width: "100%",
    height: "1px",
    margin: `${spacing[4]} 0`,
  },

  vertical: {
    width: "1px",
    height: "100%",
    margin: `0 ${spacing[4]}`,
  },
};
