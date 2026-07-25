import React from "react";

import { colors } from "../../../tokens";
import type { CSSProperties, HTMLAttributes } from "react";

export interface ListItemContentProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

const contentStyles: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  color: colors.text.primary,
};

export const ListItemContent = ({
  children,
  style,
  ...props
}: ListItemContentProps) => {
  return (
    <div
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

ListItemContent.displayName = "ListItemContent";
