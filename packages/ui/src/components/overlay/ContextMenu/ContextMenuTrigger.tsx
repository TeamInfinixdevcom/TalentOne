import React from "react";

import { triggerStyles } from "./ContextMenu.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface ContextMenuTriggerProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const ContextMenuTrigger = ({
  children,
  style,
  ...props
}: ContextMenuTriggerProps) => {
  return (
    <div
      style={{
        ...triggerStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ContextMenuTrigger.displayName = "ContextMenuTrigger";
