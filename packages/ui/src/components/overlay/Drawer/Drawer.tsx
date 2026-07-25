import React from "react";

import { drawerStyles } from "./Drawer.styles";
import type { DrawerProps } from "./Drawer.types";

export const Drawer = ({
  children,
  style,
  ...props
}: DrawerProps) => {
  return (
    <div
      style={{
        ...drawerStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Drawer.displayName = "Drawer";
