import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function localize(value, language) {
  return value && typeof value === "object" && !Array.isArray(value) ? value[language] : value;
}
