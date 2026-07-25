import React from "react";

import { shortcutStyles } from "./ContextMenu.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface ContextMenuShortcutProps
  extends HTMLAttributes<HTMLSpanElement> {
  style?: CSSProperties;
}

export const ContextMenuShortcut = ({
  children,
  style,
  ...props
}: ContextMenuShortcutProps) => {
  return (
    <span
      style={{
        ...shortcutStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

ContextMenuShortcut.displayName = "ContextMenuShortcut";
