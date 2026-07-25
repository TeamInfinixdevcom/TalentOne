import React from "react";

import { linkStyles } from "./Breadcrumb.styles";

import type { AnchorHTMLAttributes } from "react";

export interface BreadcrumbLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const BreadcrumbLink = ({
  children,
  style,
  ...props
}: BreadcrumbLinkProps) => {
  return (
    <a
      style={{
        ...linkStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </a>
  );
};

BreadcrumbLink.displayName = "BreadcrumbLink";
