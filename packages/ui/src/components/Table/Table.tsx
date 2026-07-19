import React from "react";

import { tableStyles } from "./Table.styles";
import type { TableProps } from "./Table.types";

export const Table = ({
  children,
  style,
  ...props
}: TableProps) => {
  return (
    <table
      style={{
        ...tableStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </table>
  );
};

Table.displayName = "Table";
