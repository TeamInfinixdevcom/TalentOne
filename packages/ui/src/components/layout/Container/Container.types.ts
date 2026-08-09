import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
  style?: CSSProperties;
}
