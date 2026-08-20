import { useEffect, useMemo, useState } from "react";
import { content } from "./content.js";
import { LanguageContext } from "./language.js";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => window.localStorage.getItem("portfolio-language") || "fr");

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, copy: content[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
