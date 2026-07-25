import React from "react";

import {
  wrapperStyles,
  inputStyles,
  iconStyles,
} from "./SearchInput.styles";

import type { SearchInputProps } from "./SearchInput.types";

export const SearchInput = ({
  style,
  placeholder = "Buscar...",
  ...props
}: SearchInputProps) => {
  return (
    <div style={wrapperStyles}>
      <span style={iconStyles}>
        🔍
      </span>

      <input
        type="search"
        placeholder={placeholder}
        style={{
          ...inputStyles,
          ...style,
        }}
        {...props}
      />
    </div>
  );
};

SearchInput.displayName = "SearchInput";
