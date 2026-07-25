import React from "react";

import { triggerStyles } from "./HoverCard.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface HoverCardTriggerProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const HoverCardTrigger = ({
  children,
  style,
  ...props
}: HoverCardTriggerProps) => (
  <div
    style={{
      ...triggerStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

HoverCardTrigger.displayName = "HoverCardTrigger";
