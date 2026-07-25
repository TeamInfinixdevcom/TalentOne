import React from "react";

import { contentStyles } from "./Tabs.styles";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface TabsContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const TabsContent = ({
  children,
  style,
  ...props
}: TabsContentProps) => {
  return (
    <div
      role="tabpanel"
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

TabsContent.displayName = "TabsContent";
