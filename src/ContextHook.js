import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

export default function ContextHook() {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);

  return (
    <div>
      <h2>
        Hook context: theme is {theme.isThemeLight ? "light" : "dark"} and
        language is {!language.isSpanish && "not"} Spanish
      </h2>
      <button onClick={language.toggleLanguage}>Toggle language</button>
    </div>
  );
}
