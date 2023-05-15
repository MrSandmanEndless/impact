"use client";

import type { GenericComponentType } from "@/model";
import { BeerPanel, Header } from "@/components/organisms";
import { LayoutContainer } from "./LayoutContainer";
import { LayoutContent } from "./LayoutContent";
import { BeerPanelProvider } from "@/providers";

const LayoutTemplate: GenericComponentType = () => {
  return (
    <LayoutContainer>
      <BeerPanelProvider>
        <Header>Cellar</Header>
        <LayoutContent>
          <BeerPanel />
        </LayoutContent>
      </BeerPanelProvider>
    </LayoutContainer>
  );
};

export { LayoutTemplate };
