import { GenericComponentType } from "@/model";
import { BeerCardBody } from "./BeerCardBody";
import { BeerCardContainer } from "./BeerCardContainer";
import { BeerCardHeader } from "./BeerCardHeader";

const BeerCardAtom: GenericComponentType<{
  amount: number;
  description: string;
}> = ({ amount, children, description }) => {
  return (
    <BeerCardContainer>
      <BeerCardHeader amount={amount}>{children}</BeerCardHeader>
      <BeerCardBody className="beer-card-body">
        {description.substring(0, 118)}
      </BeerCardBody>
    </BeerCardContainer>
  );
};

export { BeerCardAtom };
