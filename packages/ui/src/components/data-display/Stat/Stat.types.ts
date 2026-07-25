import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface StatProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface StatLabelProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface StatValueProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface StatDescriptionProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface StatTrendProps
  extends HTMLAttributes<HTMLDivElement> {
  value: ReactNode;
  direction?: "up" | "down" | "neutral";
  style?: CSSProperties;
}
