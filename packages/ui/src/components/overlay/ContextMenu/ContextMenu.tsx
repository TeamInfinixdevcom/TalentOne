import React from "react";

import { contextMenuStyles } from "./ContextMenu.styles";
import type { ContextMenuProps } from "./ContextMenu.types";

export const ContextMenu = ({
  children,
  style,
  ...props
}: ContextMenuProps) => {
  return (
    <div
      style={{
        ...contextMenuStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ContextMenu.displayName = "ContextMenu";
