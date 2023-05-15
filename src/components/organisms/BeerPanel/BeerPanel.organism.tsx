import { BeerMolecule } from "@/components/molecules/Beer";
import type { GenericComponentType } from "@/model";
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
  return (
    <BeerListContainer>
      {Array.from({ length: 19 }, (_, i) => (
        <BeerMolecule
          amount={1}
          description="adsmçksdm çasldmaslçdmç çaslmd aslmdlçam çlasmdlasmçldmasl mdaslçmd çlasmd lçasmd aslçdm asdkmasdmkasdmkasm adsmçksdm çasldmaslçdmç çaslmd aslmdlçam çlasmdlasmçldmasl mdaslçmd çlasmd lçasmd aslçdm asdkmasdmkasdmkasm"
          key={i}
        >
          Beer {i}
        </BeerMolecule>
      ))}
    </BeerListContainer>
  );
};

export { BeerPanel };
