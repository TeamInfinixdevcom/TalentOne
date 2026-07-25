import React from "react";

import {
  switchContainerStyles,
  switchLabelStyles,
  switchStyles,
} from "./Switch.styles";

import type { SwitchProps } from "./Switch.types";

export const Switch = ({
  label,
  style,
  ...props
}: SwitchProps) => {
  return (
    <label style={switchContainerStyles}>
      <input
        type="checkbox"
        role="switch"
        style={{
          ...switchStyles,
          ...style,
        }}
        {...props}
      />

      {label && (
        <span style={switchLabelStyles}>
          {label}
        </span>
      )}
    </label>
  );
};

Switch.displayName = "Switch";
