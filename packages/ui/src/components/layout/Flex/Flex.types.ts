import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type FlexDirection =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse";

export type FlexJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type FlexAlign =
  | "stretch"
  | "flex-start"
  | "center"
  | "flex-end"
  | "baseline";

export type FlexWrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  gap?: number | string;
  style?: CSSProperties;
}
