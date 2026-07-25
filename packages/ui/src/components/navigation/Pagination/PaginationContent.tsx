import React from "react";

import { contentStyles } from "./Pagination.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface PaginationContentProps
  extends HTMLAttributes<HTMLUListElement> {
  style?: CSSProperties;
}

export const PaginationContent = ({
  children,
  style,
  ...props
}: PaginationContentProps) => {
  return (
    <ul
      style={{
        ...contentStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </ul>
  );
};

PaginationContent.displayName = "PaginationContent";
