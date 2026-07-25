import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type StackDirection =
  | "vertical"
  | "horizontal";

export type StackAlign =
  | "stretch"
  | "flex-start"
  | "center"
  | "flex-end"
  | "baseline";

export type StackJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export interface StackProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: StackDirection;
  spacing?: number | string;
  align?: StackAlign;
  justify?: StackJustify;
  style?: CSSProperties;
}
