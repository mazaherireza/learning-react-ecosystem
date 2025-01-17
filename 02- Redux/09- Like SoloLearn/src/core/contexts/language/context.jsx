import { createContext, useContext, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import reducer from "./reducer";
import { types } from "./constants";

const LanguageContext = createContext();

const initialState = {
  language: localStorage.getItem("language") || "de",
};

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { i18n } = useTranslation();

  useEffect(() => {
    const { language } = state;
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [state.language]);

  const changeLanguage = (language) =>
    dispatch({ type: types.CHANGE_LANGUAGE, payload: language });

  return (
    <LanguageContext.Provider value={{ ...state, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
