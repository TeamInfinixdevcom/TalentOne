import React from "react";

import { navbarStyles } from "./Navbar.styles";
import type { NavbarProps } from "./Navbar.types";

export const Navbar = ({
  children,
  style,
  ...props
}: NavbarProps) => {
  return (
    <header
      style={{
        ...navbarStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </header>
  );
};

Navbar.displayName = "Navbar";
