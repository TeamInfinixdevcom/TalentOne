import React from "react";

import { brandStyles } from "./Navbar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface NavbarBrandProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const NavbarBrand = ({
  children,
  style,
  ...props
}: NavbarBrandProps) => {
  return (
    <div
      style={{
        ...brandStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

NavbarBrand.displayName = "NavbarBrand";
