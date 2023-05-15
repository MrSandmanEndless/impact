import type { InputHTMLAttributes } from "react";
import type { GenericComponentType } from "@/model";
import { styled } from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 0;
  padding: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`;

interface InputAtomType {
  min?: InputHTMLAttributes<HTMLInputElement>["min"];
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
}

const InputAtom: GenericComponentType<InputAtomType> = ({
  children,
  min,
  onChange,
  type,
  value,
}) => {
  return (
    <InputContainer>
      <InputLabel>{value ? children : "\u00A0"}</InputLabel>
      <StyledInput
        min={min}
        onChange={onChange}
        placeholder={`${children}`}
        type={type}
      />
    </InputContainer>
  );
};

export { InputAtom };
