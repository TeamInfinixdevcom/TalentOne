import React from "react";

import {
  inputBaseStyles,
  inputSizes,
  inputVariants,
} from "./Input.styles";
import type { InputProps } from "./Input.types";

export const Input = ({
  variant = "default",
  size = "md",
  style,
  ...props
}: InputProps) => {
  const inputStyle = {
    ...inputBaseStyles,
    ...inputSizes[size],
    ...inputVariants[variant],
    ...style,
  };

  return (
    <input
      style={inputStyle}
      {...props}
    />
  );
};

Input.displayName = "Input";
