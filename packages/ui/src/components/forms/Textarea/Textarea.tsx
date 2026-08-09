import type React from "react";

import {
  textareaBaseStyles,
  textareaVariants,
} from "./Textarea.styles";

import type { TextareaProps } from "./Textarea.types";

export const Textarea = ({
  variant = "outlined",
  resize = "vertical",
  style,
  ...props
}: TextareaProps) => {
  const textareaStyle: React.CSSProperties = {
    ...textareaBaseStyles,
    ...textareaVariants[variant],
    resize,
    ...style,
  };

  return (
    <textarea
      style={textareaStyle}
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";
