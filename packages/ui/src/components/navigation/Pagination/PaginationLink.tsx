import React from "react";

import {
  activeLinkStyles,
  linkStyles,
} from "./Pagination.styles";

import type {
  AnchorHTMLAttributes,
  CSSProperties,
} from "react";

export interface PaginationLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  style?: CSSProperties;
}

export const PaginationLink = ({
  children,
  active = false,
  style,
  ...props
}: PaginationLinkProps) => {
  return (
    <a
      style={{
        ...linkStyles,
        ...(active && activeLinkStyles),
        ...style,
      }}
      {...props}
    >
      {children}
    </a>
  );
};

PaginationLink.displayName = "PaginationLink";
