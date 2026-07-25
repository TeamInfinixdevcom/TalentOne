import React from "react";

import { headerStyles } from "./Drawer.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DrawerHeader = ({
  children,
  style,
  ...props
}: DrawerHeaderProps) => {
  return (
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
};

DrawerHeader.displayName = "DrawerHeader";
