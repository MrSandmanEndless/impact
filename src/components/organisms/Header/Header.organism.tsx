import type { GenericComponentType } from "@/model";
import { styled } from "styled-components";
import { ButtonAtom } from "@/components/atoms";

const HeaderContainer = styled.header`
  background-color: #fb5;
  color: #000;
  height: 30vh;
`;

const HeaderContainerBar = styled.div`
  background-color: #fff;
  box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.25);
  color: #333;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  font-size: 2rem;
  align-items: center;
  padding: 0rem 2rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  flex: 1;
`;

const Header: GenericComponentType = () => {
  return (
    <div>
      <HeaderContainer>aaa</HeaderContainer>
      <HeaderContainerBar>
        <HeaderTitle>Cellar</HeaderTitle>
        <ButtonAtom>+</ButtonAtom>
      </HeaderContainerBar>
    </div>
  );
};

export { Header };
