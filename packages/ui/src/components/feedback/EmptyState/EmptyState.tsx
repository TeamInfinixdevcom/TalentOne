
import React from "react";

import {
  actionStyles,
  descriptionStyles,
  emptyStateStyles,
  iconStyles,
  titleStyles,
} from "./EmptyState.styles";

import type { EmptyStateProps } from "./EmptyState.types";

export const EmptyState = ({
  title,
  description,
  icon,
  action,
  style,
  ...props
}: EmptyStateProps) => {
  return (
    <div
      style={{
        ...emptyStateStyles,
        ...style,
      }}
      {...props}
    >
      {icon && (
        <div style={iconStyles}>
          {icon}
        </div>
      )}

      <div style={titleStyles}>
        {title}
      </div>

      {description && (
        <div style={descriptionStyles}>
          {description}
        </div>
      )}

      {action && (
        <div style={actionStyles}>
          {action}
        </div>
      )}
    </div>
  );
};

EmptyState.displayName = "EmptyState";
