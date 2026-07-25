import React from "react";

import { labelStyles } from "./ContextMenu.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface ContextMenuLabelProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const ContextMenuLabel = ({
  children,
  style,
  ...props
}: ContextMenuLabelProps) => {
  return (
    <div
      style={{
        ...labelStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ContextMenuLabel.displayName = "ContextMenuLabel";
