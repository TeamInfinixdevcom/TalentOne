import React from "react";

import { descriptionStyles } from "./Drawer.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  style?: CSSProperties;
}

export const DrawerDescription = ({
  children,
  style,
  ...props
}: DrawerDescriptionProps) => {
  return (
    <p
      style={{
        ...descriptionStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};

DrawerDescription.displayName = "DrawerDescription";
