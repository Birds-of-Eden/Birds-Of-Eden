import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/translation.json";
import bn from "./bn/translation.json";
import ar from "./ar/translation.json";
import ja from "./ja/translation.json";
import zh from "./zh/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      bn: {
        translation: bn,
      },
      ar: {
        translation: ar,
      },
      ja: {
        translation: ja,
      },
      zh: {
        translation: zh,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
