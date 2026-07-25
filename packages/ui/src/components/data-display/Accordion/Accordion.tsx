import React from "react";

import { accordionStyles } from "./Accordion.styles";
import type { AccordionProps } from "./Accordion.types";

export const Accordion = ({
  children,
  style,
  ...props
}: AccordionProps) => {
  return (
    <div
      style={{
        ...accordionStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Accordion.displayName = "Accordion";
