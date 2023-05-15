import { GenericComponentType } from "@/model";
import { createContext, useContext, useEffect, useState } from "react";

interface BeerType {
  name: string;
  amount: number;
  description: string;
}

type BeerPanelType =
  | {
      addBeer: (Beer: BeerType) => void;
      beers: Array<BeerType>;
      open: boolean;
      setOpen: Function;
    }
  | undefined;

const BeerPanel = createContext<BeerPanelType>(undefined);

const BeerPanelProvider: GenericComponentType = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [beers, setBeers] = useState<Array<BeerType>>([]);

  const addBeer = (beer: BeerType) => {
    setBeers([...beers, beer]);
  };

  return (
    <BeerPanel.Provider value={{ addBeer, beers, open, setOpen }}>
      {children}
    </BeerPanel.Provider>
  );
};

const useBeerPanelContext = () => {
  const context = useContext(BeerPanel);
  if (!context) {
    throw new Error(
      "useBeerPanelContext must be used within a BeerPanelProvider"
    );
  }
  return context;
};

export { BeerPanelProvider, useBeerPanelContext };
