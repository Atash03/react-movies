import React, { useState } from "react";
import { IContext } from "./interfaces";

export const GlobalContext = React.createContext<IContext>({
  open: false,
  toggle: () => {},
  title: "",
  changeTitle: () => {},
  data: null,
  fillData: () => {},
  loading: false,
  changeLoading: () => {},
});

const GlobalContextProvider = ({ children }: { children: any }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("matrix");
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  console.log("GlobalContext");

  const toggle = () => {
    setOpen(!open);
  };

  const changeTitle = (value: string) => {
    setTitle(value);
  };

  const fillData = (value: any) => {
    setData(value);
  };

  const changeLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        open,
        toggle,
        title,
        changeTitle,
        data,
        fillData,
        loading,
        changeLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
