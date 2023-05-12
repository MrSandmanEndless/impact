"use client";

import type { GenericComponentType } from "@/model";

import { LayoutContainer } from "./LayoutContainer";

const LayoutTemplate: GenericComponentType = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export { LayoutTemplate };
