import React from "react";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

export interface DrawerTriggerProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

export const DrawerTrigger = ({
  children,
  style,
  ...props
}: DrawerTriggerProps) => {
  return (
    <div
      style={{
        display: "inline-flex",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

DrawerTrigger.displayName = "DrawerTrigger";
