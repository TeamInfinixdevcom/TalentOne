import { CSSProperties, TableHTMLAttributes } from "react";

export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement> {
  style?: CSSProperties;
}
