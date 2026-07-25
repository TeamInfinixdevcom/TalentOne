import React from "react";

import { itemStyles } from "./Navbar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface NavbarItemProps
  extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  style?: CSSProperties;
}

export const NavbarItem = ({
  children,
  active = false,
  style,
  ...props
}: NavbarItemProps) => {
  return (
    <div
      style={{
        ...itemStyles,
        color: active ? "#2563EB" : itemStyles.color,
        fontWeight: active ? 600 : 400,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

NavbarItem.displayName = "NavbarItem";
