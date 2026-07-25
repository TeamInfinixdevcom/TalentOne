import React from "react";

import {
  dividerBaseStyles,
  dividerOrientations,
} from "./Divider.styles";
import type { DividerProps } from "./Divider.types";

export const Divider = ({
  orientation = "horizontal",
  style,
  ...props
}: DividerProps) => {
  const dividerStyle = {
    ...dividerBaseStyles,
    ...dividerOrientations[orientation],
    ...style,
  };

  return (
    <hr
      style={dividerStyle}
      {...props}
    />
  );
};

Divider.displayName = "Divider";
