import React from "react";

import { headerStyles } from "./Accordion.styles";
import type { AccordionHeaderProps } from "./Accordion.types";

export const AccordionHeader = ({
  children,
  style,
  ...props
}: AccordionHeaderProps) => {
  return (
    <div
      style={{
        ...headerStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

AccordionHeader.displayName = "AccordionHeader";
