import React from "react";

import { hoverCardStyles } from "./HoverCard.styles";
import type { HoverCardProps } from "./HoverCard.types";

export const HoverCard = ({
  children,
  style,
  ...props
}: HoverCardProps) => (
  <div
    style={{
      ...hoverCardStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

HoverCard.displayName = "HoverCard";
