import React from "react";

import { contentStyles } from "./Accordion.styles";
import type { AccordionContentProps } from "./Accordion.types";

export const AccordionContent = ({
  children,
  style,
  ...props
}: AccordionContentProps) => {
  return (
    <div
      style={{
        ...contentStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

AccordionContent.displayName = "AccordionContent";
