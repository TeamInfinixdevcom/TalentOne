import React from "react";

import { closeStyles } from "./Drawer.styles";

import type {
  ButtonHTMLAttributes,
  CSSProperties,
} from "react";

export interface DrawerCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
}

export const DrawerClose = ({
  children = "✕",
  style,
  ...props
}: DrawerCloseProps) => {
  return (
    <button
      type="button"
      aria-label="Close drawer"
      style={{
        ...closeStyles,
        background: "transparent",
        border: "none",
        padding: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

DrawerClose.displayName = "DrawerClose";
