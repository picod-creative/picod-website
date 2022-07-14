import { createContext, FC, useContext, useState } from 'react';

export type DimensionContext = {
  navHeight: number;
  setNavHeight: (height: number) => void;
  sectionNavHeight: number;
  setSectionNavHeight: (height: number) => void;
  hiddenNavbar: boolean;
  setHiddenNavbar: (hidden: boolean) => void;
};

const dimensionContext = createContext<DimensionContext>({
  navHeight: 0,
  setNavHeight: () => {},
  sectionNavHeight: 0,
  setSectionNavHeight: () => {},
  hiddenNavbar: false,
  setHiddenNavbar: () => {},
});

export const DimensionContextProvider: FC = ({ children }) => {
  const [navHeight, setNavHeight] = useState<number>(0);
  const [sectionNavHeight, setSectionNavHeight] = useState<number>(0);
  const [hiddenNavbar, setHiddenNavbar] = useState<boolean>(false);

  return (
    <dimensionContext.Provider
      value={{
        navHeight,
        setNavHeight,
        sectionNavHeight,
        setSectionNavHeight,
        hiddenNavbar,
        setHiddenNavbar,
      }}
    >
      {children}
    </dimensionContext.Provider>
  );
};

export const DimensionContextConsumer = dimensionContext.Consumer;

export const useDimensionContext = () => useContext(dimensionContext);
