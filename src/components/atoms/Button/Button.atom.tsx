import type { MouseEventHandler } from "react";
import type { GenericComponentType } from "@/model";
import { styled } from "styled-components";

type ButtonVariantType = "default" | "add";

type ButtonAtomType = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  open?: boolean;
  variant?: ButtonVariantType;
};

const AddButton = styled.button`
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

const DefaultButton = styled.button``;

const ButtonRecord = {
  default: DefaultButton,
  add: AddButton,
};

const ButtonAtom: GenericComponentType<ButtonAtomType> = ({
  children,
  onClick,
  open,
  variant = "default",
  ...props
}) => {
  const Button = ButtonRecord[variant] || ButtonRecord["default"];
  return (
    <Button className={open ? "close" : "open"} {...props} onClick={onClick}>
      {children}
    </Button>
  );
};

export { ButtonAtom };
