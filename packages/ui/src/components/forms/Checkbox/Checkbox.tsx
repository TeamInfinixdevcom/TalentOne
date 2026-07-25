import React from "react";

import {
  checkboxContainerStyles,
  checkboxLabelStyles,
  checkboxStyles,
} from "./Checkbox.styles";

import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  label,
  style,
  ...props
}: CheckboxProps) => {
  return (
    <label style={checkboxContainerStyles}>
      <input
        type="checkbox"
        style={{
          ...checkboxStyles,
          ...style,
        }}
        {...props}
      />

      {label && (
        <span style={checkboxLabelStyles}>
          {label}
        </span>
      )}
    </label>
  );
};

Checkbox.displayName = "Checkbox";
