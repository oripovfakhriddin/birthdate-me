import { createContext, SetStateAction, useState } from "react";
import { LANGUAGELOCALKEY } from "../constants/index";
import Children from "../types/children";
import languages from "../language";
import ENG from "../language/eng";

interface AuthContextTypes {
  lang: typeof ENG;
  langType: SetStateAction<"uzb" | "eng" | "rus">;
  setLangType: (lang: SetStateAction<"uzb" | "eng" | "rus">) => void;
  changeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const LanguageContext = createContext({} as AuthContextTypes);

const LanguageContextProvider = ({ children }: Children) => {
  const [langType, setLangType] = useState<"uzb" | "rus" | "eng">(
    (localStorage.getItem(LANGUAGELOCALKEY) as "uzb" | "rus" | "eng") || "uzb"
  );

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let lang = e.target.value as "uzb" | "rus" | "eng";
    setLangType(lang);
    localStorage.setItem(LANGUAGELOCALKEY, lang);
  };
  const store = {
    langType,
    lang: languages[langType],
    changeLanguage,
    setLangType,
  };
  return (
    <LanguageContext.Provider value={store}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
