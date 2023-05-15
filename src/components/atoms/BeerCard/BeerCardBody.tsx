import { styled } from "styled-components";

const BeerCardBody = styled.div`
  height: 0;
  overflow: hidden;

  &::after {
    content: "...";
  }
`;

export { BeerCardBody };
