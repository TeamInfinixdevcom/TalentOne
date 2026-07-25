import React from "react";

import { listStyles } from "./List.styles";
import type { ListProps } from "./List.types";

export const List = ({
  children,
  style,
  ...props
}: ListProps) => {
  return (
    <ul
      style={{
        ...listStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </ul>
  );
};

List.displayName = "List";
