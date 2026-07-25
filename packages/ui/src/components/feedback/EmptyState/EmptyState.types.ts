import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface EmptyStateProps
  extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  style?: CSSProperties;
}
