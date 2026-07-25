import React from "react";

import { footerStyles } from "./List.styles";
import type { ListFooterProps } from "./List.types";

export const ListFooter = ({
  children,
  style,
  ...props
}: ListFooterProps) => {
  return (
    <div
      style={{
        ...footerStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ListFooter.displayName = "ListFooter";
