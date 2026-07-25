import React from "react";

import {
  cardBaseStyles,
  cardVariants,
} from "./Card.styles";
import type { CardProps } from "./Card.types";

export const Card = ({
  children,
  variant = "default",
  style,
  ...props
}: CardProps) => {
  const cardStyle = {
    ...cardBaseStyles,
    ...cardVariants[variant],
    ...style,
  };

  return (
    <div
      style={cardStyle}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";
