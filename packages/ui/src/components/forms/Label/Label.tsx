import React from "react";

import {
  labelStyles,
  requiredStyles,
} from "./Label.styles";

import type { LabelProps } from "./Label.types";

export const Label = ({
  children,
  required = false,
  style,
  ...props
}: LabelProps) => {
  return (
    <label
      style={{
        ...labelStyles,
        ...style,
      }}
      {...props}
    >
      {children}

      {required && (
        <span style={requiredStyles}>
          *
        </span>
      )}
    </label>
  );
};

Label.displayName = "Label";
