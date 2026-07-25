import React from "react";

import { headerStyles } from "./List.styles";
import type { ListHeaderProps } from "./List.types";

export const ListHeader = ({
  children,
  style,
  ...props
}: ListHeaderProps) => {
  return (
    <div
      style={{
        ...headerStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ListHeader.displayName = "ListHeader";
