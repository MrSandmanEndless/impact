import { styled } from "styled-components";

const BeerCardContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0 0 0.7rem 0.1rem #000a;
  bottom: 0;
  color: #000;
  left: 0;
  position: absolute;
  right: 0;

  &:hover > .beer-card-body {
    background-color: #fb5;
    height: auto;
    transition: height 10s ease-in;
    padding: 0.5rem;
  }
`;

export { BeerCardContainer };
