import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type TagVariant =
  | "solid"
  | "outline"
  | "subtle";

export type TagColorScheme =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

export interface TagProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: TagVariant;
  colorScheme?: TagColorScheme;
  style?: CSSProperties;
}

export interface TagIconProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TagCloseButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
}
