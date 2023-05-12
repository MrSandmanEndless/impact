import { ReactNode } from "react";

interface GenericComponentProps {
  children?: ReactNode;
}

type GenericComponentType<Props = {}> = (
  props: GenericComponentProps & Props
) => JSX.Element;

export type { GenericComponentType };
