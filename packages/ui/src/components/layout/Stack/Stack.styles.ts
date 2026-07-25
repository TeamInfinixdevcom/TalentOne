import type { CSSProperties } from "react";
import { spacing } from "../../../tokens";

export const stackBaseStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[4],
};
