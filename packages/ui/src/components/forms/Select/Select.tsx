import type React from "react";

import {
  selectBaseStyles,
  selectVariants,
} from "./Select.styles";

import type { SelectProps } from "./Select.types";

export const Select = ({
  options,
  variant = "outlined",
  style,
  ...props
}: SelectProps) => {
  const selectStyle: React.CSSProperties = {
    ...selectBaseStyles,
    ...selectVariants[variant],
    ...style,
  };

  return (
    <select
      style={selectStyle}
      {...props}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.displayName = "Select";
