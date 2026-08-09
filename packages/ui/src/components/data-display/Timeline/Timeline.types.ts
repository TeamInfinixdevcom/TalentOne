import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface TimelineProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TimelineItemProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TimelineSeparatorProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TimelineDotProps
  extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: "primary" | "success" | "warning" | "danger" | "neutral";
  style?: CSSProperties;
}

export interface TimelineConnectorProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export interface TimelineContentProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TimelineTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TimelineDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  style?: CSSProperties;
}
export interface TimelineIconProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  style?: CSSProperties;
}
export interface TimelineTimestampProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
export interface TimelineOppositeProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
