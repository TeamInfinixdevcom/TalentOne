import type {
  CSSProperties,
  HTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export interface AccordionProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface AccordionItemProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface AccordionHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface AccordionTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export interface AccordionContentProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
}
