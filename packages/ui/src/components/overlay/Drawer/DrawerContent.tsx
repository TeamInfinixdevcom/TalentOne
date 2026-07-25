import React from "react";

import { contentStyles } from "./Drawer.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DrawerContent = ({
  children,
  style,
  ...props
}: DrawerContentProps) => {
  return (
    <aside
      style={{
        ...contentStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </aside>
  );
};

DrawerContent.displayName = "DrawerContent";
