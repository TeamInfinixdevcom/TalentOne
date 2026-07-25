import React from "react";

import { separatorStyles } from "./ContextMenu.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface ContextMenuSeparatorProps
  extends HTMLAttributes<HTMLHRElement> {
  style?: CSSProperties;
}

export const ContextMenuSeparator = ({
  style,
  ...props
}: ContextMenuSeparatorProps) => {
  return (
    <hr
      role="separator"
      style={{
        ...separatorStyles,
        ...style,
      }}
      {...props}
    />
  );
};

ContextMenuSeparator.displayName = "ContextMenuSeparator";
