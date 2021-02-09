// Create context file config
import React from "react";
const LanguageContext = React.createContext({
  lang: "en",
  setLang: () => {},
});
export const LanguageProvider= LanguageContext.Provider;
export default LanguageContext ;
