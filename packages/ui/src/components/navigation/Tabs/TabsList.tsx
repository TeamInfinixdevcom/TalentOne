import React from "react";

import { listStyles } from "./Tabs.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface TabsListProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const TabsList = ({
  children,
  style,
  ...props
}: TabsListProps) => {
  return (
    <div
      role="tablist"
      style={{
        ...listStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

TabsList.displayName = "TabsList";
