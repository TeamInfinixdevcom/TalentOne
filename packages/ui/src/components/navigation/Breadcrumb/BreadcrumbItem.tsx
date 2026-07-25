import React from "react";

import { itemStyles } from "./Breadcrumb.styles";

import type { HTMLAttributes } from "react";

export interface BreadcrumbItemProps
  extends HTMLAttributes<HTMLLIElement> {}

export const BreadcrumbItem = ({
  children,
  style,
  ...props
}: BreadcrumbItemProps) => {
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

BreadcrumbItem.displayName = "BreadcrumbItem";
