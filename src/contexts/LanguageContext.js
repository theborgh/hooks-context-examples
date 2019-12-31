import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  let [isSpanish, setIsSpanish] = useState(true);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
    console.log("isSpanish is ", isSpanish);
  };

  return (
    <LanguageContext.Provider value={{ isSpanish, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
