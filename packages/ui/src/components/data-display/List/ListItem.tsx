import React from "react";

import { itemStyles } from "./List.styles";
import type { ListItemProps } from "./List.types";

export const ListItem = ({
  children,
  style,
  ...props
}: ListItemProps) => {
  return (
    <li
      style={{
        ...itemStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </li>
  );
};

ListItem.displayName = "ListItem";
