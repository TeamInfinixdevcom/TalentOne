import React from "react";

import { PaginationLink } from "./PaginationLink";

import type { PaginationLinkProps } from "./PaginationLink";

export const PaginationPrevious = (
  props: PaginationLinkProps
) => {
  return (
    <PaginationLink {...props}>
      ←
    </PaginationLink>
  );
};

PaginationPrevious.displayName = "PaginationPrevious";
