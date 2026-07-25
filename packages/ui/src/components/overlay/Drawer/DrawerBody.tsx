import React from "react";

import { bodyStyles } from "./Drawer.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerBodyProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DrawerBody = ({
  children,
  style,
  ...props
}: DrawerBodyProps) => {
  return (
    <div
      style={{
        ...bodyStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

DrawerBody.displayName = "DrawerBody";
