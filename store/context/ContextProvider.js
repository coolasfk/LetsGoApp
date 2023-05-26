import { createContext, useContext, useState } from "react";
import { Dimensions } from "react-native";

const Context = createContext(null);
export const UseContextHook = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  return (
    <Context.Provider value={{ image, setImage }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

// const TodoContext = createContext({showModal:()=>{}});
