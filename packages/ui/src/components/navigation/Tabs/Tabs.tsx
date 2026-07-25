import React from "react";

import { tabsStyles } from "./Tabs.styles";

import type { TabsProps } from "./Tabs.types";

export const Tabs = ({
  children,
  style,
  ...props
}: TabsProps) => {
  return (
    <div
      style={{
        ...tabsStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Tabs.displayName = "Tabs";
