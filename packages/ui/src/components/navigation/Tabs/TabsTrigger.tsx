import React from "react";

import {
  activeTriggerStyles,
  triggerStyles,
} from "./Tabs.styles";

import type {
  ButtonHTMLAttributes,
  CSSProperties,
} from "react";

export interface TabsTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  style?: CSSProperties;
}

export const TabsTrigger = ({
  children,
  active = false,
  style,
  ...props
}: TabsTriggerProps) => {
  return (
    <button
      role="tab"
      aria-selected={active}
      style={{
        ...triggerStyles,
        ...(active && activeTriggerStyles),
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

TabsTrigger.displayName = "TabsTrigger";
