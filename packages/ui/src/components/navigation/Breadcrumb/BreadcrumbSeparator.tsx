import React from "react";

import { separatorStyles } from "./Breadcrumb.styles";

import type { HTMLAttributes, ReactNode } from "react";

export interface BreadcrumbSeparatorProps
  extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export const BreadcrumbSeparator = ({
  children = "/",
  style,
  ...props
}: BreadcrumbSeparatorProps) => {
  return (
    <span
      aria-hidden="true"
      style={{
        ...separatorStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
