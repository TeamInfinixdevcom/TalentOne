import React from "react";

import {
  shimmerStyles,
  skeletonBaseStyles,
  skeletonVariants,
} from "./Skeleton.styles";

import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton = ({
  width,
  height,
  variant = "rectangular",
  animated = true,
  style,
  ...props
}: SkeletonProps) => {
  return (
    <>
      <style>
        {`
          @keyframes talentone-skeleton {
            0%{
              transform:translateX(-100%);
            }

            100%{
              transform:translateX(100%);
            }
          }
        `}
      </style>

      <div
        style={{
          ...skeletonBaseStyles,
          ...skeletonVariants[variant],
          ...(width && { width }),
          ...(height && { height }),
          ...style,
        }}
        {...props}
      >
        {animated && (
          <div style={shimmerStyles} />
        )}
      </div>
    </>
  );
};

Skeleton.displayName = "Skeleton";
