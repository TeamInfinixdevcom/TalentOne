import React from "react";

import { PaginationLink } from "./PaginationLink";

import type { PaginationLinkProps } from "./PaginationLink";

export const PaginationNext = (
  props: PaginationLinkProps
) => {
  return (
    <PaginationLink {...props}>
      →
    </PaginationLink>
  );
};

PaginationNext.displayName = "PaginationNext";
