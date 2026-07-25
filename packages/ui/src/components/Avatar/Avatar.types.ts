import { CSSProperties, HTMLAttributes } from "react";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarVariant = "primary" | "secondary" | "neutral";

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  style?: CSSProperties;
}
