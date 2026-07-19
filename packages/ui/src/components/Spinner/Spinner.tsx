import React from "react";

import {
  spinnerBaseStyles,
  spinnerSizes,
} from "./Spinner.styles";
import type { SpinnerProps } from "./Spinner.types";

export const Spinner = ({
  size = "md",
  style,
  ...props
}: SpinnerProps) => {
  const spinnerStyle = {
    ...spinnerBaseStyles,
    ...spinnerSizes[size],
    ...style,
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div
        style={spinnerStyle}
        {...props}
      />
    </>
  );
};

Spinner.displayName = "Spinner";
