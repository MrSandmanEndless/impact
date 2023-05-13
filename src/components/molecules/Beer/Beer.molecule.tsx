import type { GenericComponentType } from "@/model";
import { BeerCardAtom } from "@/components/atoms";
import { BeerContainer } from "./BeerContainer";

const BeerMolecule: GenericComponentType<{
  amount: number;
  description: string;
}> = ({ amount, description, children }) => {
  return (
    <BeerContainer>
      <BeerCardAtom amount={amount} description={description}>
        {children}
      </BeerCardAtom>
    </BeerContainer>
  );
};

export { BeerMolecule };
