import React from "react";

import {
  errorTextStyles,
  formFieldStyles,
  helperTextStyles,
  labelStyles,
} from "./FormField.styles";

import type { FormFieldProps } from "./FormField.types";

export const FormField = ({
  label,
  helperText,
  error,
  required = false,
  children,
  style,
  ...props
}: FormFieldProps) => {
  return (
    <div
      style={{
        ...formFieldStyles,
        ...style,
      }}
      {...props}
    >
      {label && (
        <label htmlFor={props.id} style={labelStyles}>
          {label}
          {required && (
            <span
              style={{
                color: "red",
                marginLeft: 4,
              }}
            >
              *
            </span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <span style={errorTextStyles}>
          {error}
        </span>
      ) : (
        helperText && (
          <span style={helperTextStyles}>
            {helperText}
          </span>
        )
      )}
    </div>
  );
};

FormField.displayName = "FormField";
