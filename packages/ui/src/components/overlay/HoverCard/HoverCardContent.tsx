import React from "react";

import { contentStyles } from "./HoverCard.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface HoverCardContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const HoverCardContent = ({
  children,
  style,
  ...props
}: HoverCardContentProps) => (
  <div
    style={{
      ...contentStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

HoverCardContent.displayName = "HoverCardContent";
