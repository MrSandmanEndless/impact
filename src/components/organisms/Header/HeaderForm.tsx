import { ButtonAtom, InputAtom } from "@/components/atoms";
import type { GenericComponentType } from "@/model";
import { useBeerPanelContext } from "@/providers";
import { useState } from "react";
import { styled } from "styled-components";

const HeaderFormContainer = styled.header<{ open: boolean }>`
  background-color: #fb5;
  color: #000;
  height: ${(props) => (props.open ? "30vh" : "0")};
  overflow: hidden;
  transition: height 0.5s ease;
`;

const HeaderFormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 1rem;
`;

const HeaderForm: GenericComponentType = () => {
  const { open, addBeer } = useBeerPanelContext();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleOnClick = () => {
    addBeer({ amount: Number(amount), description, name });
  };

  return (
    <HeaderFormContainer open={open}>
      <HeaderFormRow>
        <InputAtom
          onChange={(evt) => setName(evt.target.value)}
          type="text"
          value={name}
        >
          Beer name
        </InputAtom>

        <InputAtom
          onChange={(evt) => setDescription(evt.target.value)}
          type="text"
          value={description}
        >
          Beer description
        </InputAtom>

        <InputAtom
          onChange={(evt) => setAmount(evt.target.value)}
          type="number"
          value={amount}
          min="0"
        >
          Beer amount
        </InputAtom>
      </HeaderFormRow>

      <HeaderFormRow>
        <ButtonAtom onClick={handleOnClick}>Add</ButtonAtom>
      </HeaderFormRow>
    </HeaderFormContainer>
  );
};

export { HeaderForm };
