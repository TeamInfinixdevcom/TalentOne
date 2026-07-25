import React from "react";

import { contentStyles } from "./ContextMenu.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface ContextMenuContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const ContextMenuContent = ({
  children,
  style,
  ...props
}: ContextMenuContentProps) => {
  return (
    <div
      role="menu"
      style={{
        ...contentStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ContextMenuContent.displayName = "ContextMenuContent";
