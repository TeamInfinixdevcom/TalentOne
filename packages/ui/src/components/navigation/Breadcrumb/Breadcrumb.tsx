import React from "react";

import { breadcrumbStyles } from "./Breadcrumb.styles";

import type { BreadcrumbProps } from "./Breadcrumb.types";

export const Breadcrumb = ({
  children,
  style,
  ...props
}: BreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      {...props}
    >
      <ol
        style={{
          ...breadcrumbStyles,
          ...style,
        }}
      >
        {children}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = "Breadcrumb";
