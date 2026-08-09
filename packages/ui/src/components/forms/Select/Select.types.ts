import type {
  CSSProperties,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from "react";

export interface SelectOption
  extends OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

export type SelectVariant =
  | "outlined"
  | "filled";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options: SelectOption[];
  variant?: SelectVariant;
  style?: CSSProperties;
}
