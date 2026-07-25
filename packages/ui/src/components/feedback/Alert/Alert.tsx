import React from "react";

import {
  alertBaseStyles,
  alertVariants,
  contentStyles,
  titleStyles,
} from "./Alert.styles";

import type { AlertProps } from "./Alert.types";

export const Alert = ({
  title,
  children,
  variant = "info",
  style,
  ...props
}: AlertProps) => {
  const alertStyle: React.CSSProperties = {
    ...alertBaseStyles,
    ...alertVariants[variant],
    ...style,
  };

  return (
    <div
      style={alertStyle}
      role="alert"
      {...props}
    >
      {title && (
        <span style={titleStyles}>
          {title}
        </span>
      )}

      <span style={contentStyles}>
        {children}
      </span>
    </div>
  );
};

Alert.displayName = "Alert";
