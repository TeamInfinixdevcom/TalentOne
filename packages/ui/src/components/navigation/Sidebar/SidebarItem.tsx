import React from "react";

import {
  activeItemStyles,
  itemStyles,
} from "./Sidebar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface SidebarItemProps
  extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  style?: CSSProperties;
}

export const SidebarItem = ({
  children,
  active = false,
  style,
  ...props
}: SidebarItemProps) => (
  <div
    style={{
      ...itemStyles,
      ...(active && activeItemStyles),
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

SidebarItem.displayName = "SidebarItem";
