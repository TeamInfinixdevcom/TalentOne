import React from "react";

import { groupStyles } from "./ContextMenu.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface ContextMenuGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const ContextMenuGroup = ({
  children,
  style,
  ...props
}: ContextMenuGroupProps) => {
  return (
    <div
      role="group"
      style={{
        ...groupStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ContextMenuGroup.displayName = "ContextMenuGroup";
