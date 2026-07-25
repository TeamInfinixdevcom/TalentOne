import React from "react";

import { overlayStyles } from "./Drawer.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerOverlayProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DrawerOverlay = ({
  style,
  ...props
}: DrawerOverlayProps) => {
  return (
    <div
      style={{
        ...overlayStyles,
        ...style,
      }}
      {...props}
    />
  );
};

DrawerOverlay.displayName = "DrawerOverlay";
