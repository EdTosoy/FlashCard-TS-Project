import React, { useState, createContext } from "react";

type ContextProps = {
  notificationDisplay: Boolean;
  SetnotificationDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  dropDownDisplay: Boolean;
  SetdropDownDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  addModalDisplay: Boolean;
  setAddModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: Boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HomeContext = createContext<ContextProps>({
  notificationDisplay: false,
  SetnotificationDisplay: () => {},
  dropDownDisplay: false,
  SetdropDownDisplay: () => {},
  addModalDisplay: false,
  setAddModalDisplay: () => {},
  darkTheme: true,
  setDarkTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const HomeProvider = ({ children }: Props) => {
  const [notificationDisplay, SetnotificationDisplay] = useState<boolean>(
    false
  );
  const [dropDownDisplay, SetdropDownDisplay] = useState<boolean>(false);
  const [addModalDisplay, setAddModalDisplay] = useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  return (
    <HomeContext.Provider
      value={{
        notificationDisplay,
        SetnotificationDisplay,
        dropDownDisplay,
        SetdropDownDisplay,
        addModalDisplay,
        setAddModalDisplay,
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
