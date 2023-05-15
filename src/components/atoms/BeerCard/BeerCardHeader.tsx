import type { GenericComponentType } from "@/model";
import { styled } from "styled-components";

const BeerCardHeaderContainer = styled.div`
  display: flex;
  margin: 0.5rem;
`;

const BeerCardHeaderName = styled.div`
  flex: 1;
`;

const BeerCardHeaderAmount = styled.div`
  &::before {
    content: "x";
  }
`;

const BeerCardHeader: GenericComponentType<{ amount: number }> = ({
  amount,
  children,
}) => {
  return (
    <BeerCardHeaderContainer>
      <BeerCardHeaderName>{children}</BeerCardHeaderName>
      <BeerCardHeaderAmount>{amount}</BeerCardHeaderAmount>
    </BeerCardHeaderContainer>
  );
};

export { BeerCardHeader };
