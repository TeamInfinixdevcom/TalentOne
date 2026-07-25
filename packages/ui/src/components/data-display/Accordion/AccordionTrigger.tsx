import React from "react";

import { triggerStyles } from "./Accordion.styles";
import type { AccordionTriggerProps } from "./Accordion.types";

export const AccordionTrigger = ({
  children,
  style,
  ...props
}: AccordionTriggerProps) => {
  return (
    <button
      type="button"
      style={{
        ...triggerStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

AccordionTrigger.displayName = "AccordionTrigger";
