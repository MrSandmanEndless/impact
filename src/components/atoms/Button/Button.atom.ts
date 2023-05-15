import { styled } from "styled-components";

const ButtonAtom = styled.button`
  background-color: #fb5;
  border: 0;
  border-radius: 100rem;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  height: 3rem;
  width: 3rem;
  bottom: 1rem;
  right: 1rem;

  &.close {
    transform: rotate(45deg);
  }
`;

export { ButtonAtom };
