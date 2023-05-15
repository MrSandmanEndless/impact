"use client";

import type { GenericComponentType } from "@/model";
import { BeerPanel, Header } from "@/components/organisms";
import { LayoutContainer } from "./LayoutContainer";
import { LayoutContent } from "./LayoutContent";

const LayoutTemplate: GenericComponentType = () => {
  return (
    <LayoutContainer>
      <Header>Cellar</Header>
      <LayoutContent>
        <BeerPanel />
      </LayoutContent>
    </LayoutContainer>
  );
};

export { LayoutTemplate };
