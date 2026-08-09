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
  checked,
  defaultChecked,
  ...props
}: SwitchProps) => {
  return (
    <label style={switchContainerStyles}>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        defaultChecked={defaultChecked}
        aria-checked={checked ?? defaultChecked ?? false}
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
