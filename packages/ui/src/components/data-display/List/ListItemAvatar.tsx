import React from "react";

import { spacing } from "../../../tokens";
import type { CSSProperties, HTMLAttributes } from "react";

export interface ListItemAvatarProps
  extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

const avatarStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: spacing[3],
  flexShrink: 0,
};

export const ListItemAvatar = ({
  children,
  style,
  ...props
}: ListItemAvatarProps) => {
  return (
    <div
      style={{
        ...avatarStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ListItemAvatar.displayName = "ListItemAvatar";
