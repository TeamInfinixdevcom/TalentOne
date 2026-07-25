import React from "react";

import { currentStyles } from "./Breadcrumb.styles";

import type { HTMLAttributes } from "react";

export interface BreadcrumbCurrentProps
  extends HTMLAttributes<HTMLSpanElement> {}

export const BreadcrumbCurrent = ({
  children,
  style,
  ...props
}: BreadcrumbCurrentProps) => {
  return (
    <span
      aria-current="page"
      style={{
        ...currentStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

BreadcrumbCurrent.displayName = "BreadcrumbCurrent";
