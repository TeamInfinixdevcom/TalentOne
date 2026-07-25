import React, { useState } from "react";

import {
  wrapperStyles,
  tooltipBaseStyles,
  tooltipPlacements,
} from "./Tooltip.styles";

import type { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  content,
  children,
  placement = "top",
  style,
  ...props
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={wrapperStyles}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      {...props}
    >
      {children}

      <div
        style={{
          ...tooltipBaseStyles,
          ...tooltipPlacements[placement],
          opacity: visible ? 1 : 0,
          visibility: visible ? "visible" : "hidden",
          ...style,
        }}
      >
        {content}
      </div>
    </div>
  );
};

Tooltip.displayName = "Tooltip";
