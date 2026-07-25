import React from "react";

import { itemStyles } from "./Accordion.styles";
import type { AccordionItemProps } from "./Accordion.types";

export const AccordionItem = ({
  children,
  style,
  ...props
}: AccordionItemProps) => {
  return (
    <div
      style={{
        ...itemStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

AccordionItem.displayName = "AccordionItem";
