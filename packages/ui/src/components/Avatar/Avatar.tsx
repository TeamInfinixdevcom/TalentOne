import React from "react";

import {
  avatarBaseStyles,
  avatarSizes,
  avatarVariants,
} from "./Avatar.styles";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = ({
  src,
  alt,
  name,
  size = "md",
  variant = "neutral",
  style,
  ...props
}: AvatarProps) => {
  const avatarStyle = {
    ...avatarBaseStyles,
    ...avatarSizes[size],
    ...avatarVariants[variant],
    ...style,
  };

  const initials =
    name
      ?.trim()
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() ?? "?";

  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? name ?? "Avatar"}
        style={avatarStyle}
        {...props}
      />
    );
  }

  return (
    <div
      style={avatarStyle}
      aria-label={alt ?? name ?? "Avatar"}
      {...props}
    >
      {initials}
    </div>
  );
};

Avatar.displayName = "Avatar";
