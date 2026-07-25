import React from "react";

import { contentStyles } from "./Navbar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface NavbarContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const NavbarContent = ({
  children,
  style,
  ...props
}: NavbarContentProps) => {
  return (
    <nav
      style={{
        ...contentStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </nav>
  );
};

NavbarContent.displayName = "NavbarContent";
