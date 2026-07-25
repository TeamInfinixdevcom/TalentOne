import React from "react";

import { headerStyles } from "./Sidebar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface SidebarHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const SidebarHeader = ({
  children,
  style,
  ...props
}: SidebarHeaderProps) => (
  <div
    style={{
      ...headerStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

SidebarHeader.displayName = "SidebarHeader";
