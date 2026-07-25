import React from "react";

import {
  modalStyles,
  overlayStyles,
} from "./Modal.styles";
import type { ModalProps } from "./Modal.types";

export const Modal = ({
  open,
  children,
  style,
  ...props
}: ModalProps) => {
  if (!open) return null;

  return (
    <div style={overlayStyles}>
      <div
        style={{
          ...modalStyles,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

Modal.displayName = "Modal";
