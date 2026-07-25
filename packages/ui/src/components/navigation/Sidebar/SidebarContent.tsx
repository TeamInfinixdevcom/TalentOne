import React from "react";

import { contentStyles } from "./Sidebar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface SidebarContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const SidebarContent = ({
  children,
  style,
  ...props
}: SidebarContentProps) => (
  <div
    style={{
      ...contentStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

SidebarContent.displayName = "SidebarContent";
