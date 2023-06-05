import { createContext, useContext, useState } from "react";
import { Dimensions } from "react-native";

const Context = createContext(null);
export const UseContextHook = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  let [actionBtnOpacity, setActionButtonOpacity] = useState(0.3);
  let [userData, setUserData] = useState({});
  let [base64, setBase64] = useState([]);
  let [chosenSports, setChosenSports] = useState([]);
  const [location, setLocation] = useState(null);
  const [userLocation, setUserLocation] = useState({});
  const [newCity, setCity] = useState();
  const [cityText, setCityText] = useState("");

  return (
    <Context.Provider
      value={{
        image,
        setImage,
        actionBtnOpacity,
        setActionButtonOpacity,
        userData,
        setUserData,
        base64,
        setBase64,
        chosenSports,
        setChosenSports,
        location,
        setLocation,
        userLocation,
        setUserLocation,
        newCity,
        setCity,
        cityText,
        setCityText,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

// const TodoContext = createContext({showModal:()=>{}});
