import type { GenericComponentType } from "@/model";
import { styled } from "styled-components";
import { ButtonAtom } from "@/components/atoms";
import { HeaderForm } from "./HeaderForm";
import { useBeerPanelContext } from "@/providers";

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
  const { open, setOpen } = useBeerPanelContext();

  return (
    <div>
      <HeaderForm />
      <HeaderContainerBar>
        <HeaderTitle>Cellar</HeaderTitle>
        <ButtonAtom variant="add" open={open} onClick={() => setOpen(!open)}>
          +
        </ButtonAtom>
      </HeaderContainerBar>
    </div>
  );
};

export { Header };
