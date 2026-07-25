import React from "react";

import {
  radioContainerStyles,
  radioLabelStyles,
  radioStyles,
} from "./Radio.styles";

import type { RadioProps } from "./Radio.types";

export const Radio = ({
  label,
  style,
  ...props
}: RadioProps) => {
  return (
    <label style={radioContainerStyles}>
      <input
        type="radio"
        style={{
          ...radioStyles,
          ...style,
        }}
        {...props}
      />

      {label && (
        <span style={radioLabelStyles}>
          {label}
        </span>
      )}
    </label>
  );
};

Radio.displayName = "Radio";
