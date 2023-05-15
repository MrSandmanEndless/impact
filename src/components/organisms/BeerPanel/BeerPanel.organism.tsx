import { BeerMolecule } from "@/components/molecules/Beer";
import type { GenericComponentType } from "@/model";
import { useBeerPanelContext } from "@/providers";
import { styled } from "styled-components";

const BeerListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  overflow: auto;
`;

const BeerPanel: GenericComponentType = () => {
  const { beers } = useBeerPanelContext();
  return (
    <BeerListContainer>
      {beers.map(({ amount, description, name }, index) => (
        <BeerMolecule key={index} amount={amount} description={description}>
          {name}
        </BeerMolecule>
      ))}
    </BeerListContainer>
  );
};

export { BeerPanel };
