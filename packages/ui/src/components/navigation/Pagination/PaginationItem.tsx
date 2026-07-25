import React from "react";

import { itemStyles } from "./Pagination.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PaginationItemProps
  extends HTMLAttributes<HTMLLIElement> {
  style?: CSSProperties;
}

export const PaginationItem = ({
  children,
  style,
  ...props
}: PaginationItemProps) => {
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

PaginationItem.displayName = "PaginationItem";
