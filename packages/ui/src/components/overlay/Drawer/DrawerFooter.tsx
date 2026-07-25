import React from "react";

import { footerStyles } from "./Drawer.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerFooterProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DrawerFooter = ({
  children,
  style,
  ...props
}: DrawerFooterProps) => {
  return (
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
};

DrawerFooter.displayName = "DrawerFooter";
