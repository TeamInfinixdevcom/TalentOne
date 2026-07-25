import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface ListProps
  extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface ListItemProps
  extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface ListHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface ListFooterProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
