import React from "react";

import { gridBaseStyles } from "./Grid.styles";
import type { GridProps } from "./Grid.types";

export const Grid = ({
  children,
  columns = 1,
  gap,
  style,
  ...props
}: GridProps) => {
  const gridStyle = {
    ...gridBaseStyles,
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    ...(gap !== undefined && { gap }),
    ...style,
  };

  return (
    <div
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
};

Grid.displayName = "Grid";
