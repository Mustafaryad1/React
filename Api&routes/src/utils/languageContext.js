import React from "react";
const LanguageContext = React.createContext({
  lang: "en",
  setlang: () => {},
});
export const LanguageProvider= LanguageContext.Provider;
export default LanguageContext ;
