import React from "react";

import { titleStyles } from "./Drawer.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  style?: CSSProperties;
}

export const DrawerTitle = ({
  children,
  style,
  ...props
}: DrawerTitleProps) => {
  return (
    <h2
      style={{
        ...titleStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

DrawerTitle.displayName = "DrawerTitle";
