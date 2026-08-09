import React from "react";

import {
  closeButtonStyles,
  contentStyles,
  headingStyles,
  messageStyles,
  toastBaseStyles,
  toastVariants,
} from "./Toast.styles";

import type { ToastProps } from "./Toast.types";

export const Toast = ({
  heading,
  children,
  variant = "info",
  closable = false,
  onClose,
  style,
  ...props
}: ToastProps) => {
  return (
    <output
      style={{
        ...toastBaseStyles,
        ...toastVariants[variant],
        ...style,
      }}
      {...props}
    >
      <div style={contentStyles}>
        {heading && (
          <div style={headingStyles}>
            {heading}
          </div>
        )}

        <div style={messageStyles}>
          {children}
        </div>
      </div>

      {closable && (
        <button
          type="button"
          onClick={onClose}
          style={closeButtonStyles}
          aria-label="Cerrar"
        >
          ×
        </button>
      )}
    </output>
  );
};

Toast.displayName = "Toast";
