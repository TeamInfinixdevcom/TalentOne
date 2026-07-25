import React from "react";

import { sidebarStyles } from "./Sidebar.styles";

import type { SidebarProps } from "./Sidebar.types";

export const Sidebar = ({
  children,
  collapsed,
  style,
  ...props
}: SidebarProps) => {
  return (
    <aside
      style={{
        ...sidebarStyles,
        width: collapsed ? "72px" : sidebarStyles.width,
        ...style,
      }}
      {...props}
    >
      {children}
    </aside>
  );
};

Sidebar.displayName = "Sidebar";
