import { CSSProperties, HTMLAttributes } from "react";

export type SpinnerSize =
  | "sm"
  | "md"
  | "lg";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  style?: CSSProperties;
}
