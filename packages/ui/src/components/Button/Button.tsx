import React from "react";

import { buttonBaseStyles, buttonSizes, buttonVariants } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  style,
  ...props
}: ButtonProps) => {
  const buttonStyle = {
    ...buttonBaseStyles,
    ...buttonVariants[variant],
    ...buttonSizes[size],
    ...(style ?? {}),
  };

  return (
    <button
      type="button"
      disabled={disabled || loading}
      style={buttonStyle}
      {...props}
    >
      {loading ? (
        "Cargando..."
      ) : (
        <>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </>
      )}
    </button>
  );
};
