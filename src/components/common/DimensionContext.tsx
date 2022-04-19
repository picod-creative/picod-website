import { createContext, FC, useContext, useState } from 'react';

export type DimensionContext = {
  navHeight: number;
  setNavHeight: (height: number) => void;
};

const dimensionContext = createContext<DimensionContext>({
  navHeight: 0,
  setNavHeight: () => {},
});

export const DimensionContextProvider: FC = ({ children }) => {
  const [navHeight, setNavHeight] = useState<number>(0);

  return (
    <dimensionContext.Provider value={{ navHeight, setNavHeight }}>
      {children}
    </dimensionContext.Provider>
  );
};

export const DimensionContextConsumer = dimensionContext.Consumer;

export const useDimensionContext = () => useContext(dimensionContext);
