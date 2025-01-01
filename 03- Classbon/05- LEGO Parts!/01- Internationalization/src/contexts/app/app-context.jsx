import { createContext, useReducer, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import appReducer from "./app-reducer";
import { types } from "./constant";

const AppContext = createContext();

const initialState = {
  language: localStorage.getItem("language") || "fa",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);
    document.dir = state.language == "fa" ? "rtl" : "ltr";
  }, [state.language]);

  const changeLanguage = (language) => {
    dispatch({ type: types.CHANGE_LANGUAGE, payload: language });
  };

  return (
    <AppContext.Provider value={{ ...state, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
