import React from "react";

import { paginationStyles } from "./Pagination.styles";

import type { PaginationProps } from "./Pagination.types";

export const Pagination = ({
  children,
  style,
  ...props
}: PaginationProps) => {
  return (
    <nav
      aria-label="Pagination"
      style={{
        ...paginationStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </nav>
  );
};

Pagination.displayName = "Pagination";
