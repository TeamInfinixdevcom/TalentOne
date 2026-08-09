import React from "react";

import { itemStyles } from "./ContextMenu.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface ContextMenuItemProps
  extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  style?: CSSProperties;
}

export const ContextMenuItem = ({
  children,
  disabled = false,
  style,
  tabIndex,
  ...props
}: ContextMenuItemProps) => {
  return (
    <div
      role="menuitem"
      aria-disabled={disabled}
      tabIndex={tabIndex ?? (disabled ? -1 : 0)}
      style={{
        ...itemStyles,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ContextMenuItem.displayName = "ContextMenuItem";
