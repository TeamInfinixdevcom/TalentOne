import React from "react";

import { actionsStyles } from "./Navbar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface NavbarActionsProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const NavbarActions = ({
  children,
  style,
  ...props
}: NavbarActionsProps) => {
  return (
    <div
      style={{
        ...actionsStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

NavbarActions.displayName = "NavbarActions";
