import React from "react";

import { spacing } from "../../../tokens";
import type { CSSProperties, HTMLAttributes } from "react";

export interface ListItemActionsProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

const actionsStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: spacing[2],
  marginLeft: spacing[3],
  flexShrink: 0,
};

export const ListItemActions = ({
  children,
  style,
  ...props
}: ListItemActionsProps) => {
  return (
    <div
      style={{
        ...actionsStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ListItemActions.displayName = "ListItemActions";
