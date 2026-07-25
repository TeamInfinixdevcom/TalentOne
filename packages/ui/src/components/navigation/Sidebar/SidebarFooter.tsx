import React from "react";

import { footerStyles } from "./Sidebar.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface SidebarFooterProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const SidebarFooter = ({
  children,
  style,
  ...props
}: SidebarFooterProps) => (
  <div
    style={{
      ...footerStyles,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

SidebarFooter.displayName = "SidebarFooter";
