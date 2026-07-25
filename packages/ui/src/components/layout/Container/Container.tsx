import React from "react";

import {
  containerBaseStyles,
  containerSizes,
} from "./Container.styles";
import type { ContainerProps } from "./Container.types";

export const Container = ({
  children,
  size = "xl",
  style,
  ...props
}: ContainerProps) => {
  const containerStyle = {
    ...containerBaseStyles,
    ...containerSizes[size],
    ...style,
  };

  return (
    <div
      style={containerStyle}
      {...props}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";
