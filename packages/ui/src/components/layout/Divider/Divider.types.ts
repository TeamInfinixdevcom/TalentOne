import { CSSProperties, HTMLAttributes } from "react";

export type DividerOrientation =
  | "horizontal"
  | "vertical";

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
  style?: CSSProperties;
}
