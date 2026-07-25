import React from "react";

import { groupStyles } from "./Sidebar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface SidebarGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const SidebarGroup = ({
  children,
  style,
  ...props
}: SidebarGroupProps) => (
  <div
    style={{
      ...groupStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

SidebarGroup.displayName = "SidebarGroup";
