'use client';
import i18n from "i18next";
import { initReactI18next} from "react-i18next";
import pl from "../locales/pl.json"
import en from "../locales/en.json"
import ru from "../locales/ru.json"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)


type TranslationResource = {
  translation: Record<string, string>;
};

type Resources = {
  en: TranslationResource;
  pl: TranslationResource;
  ru: TranslationResource;
};

const resources: Resources = {
  en: { translation: en },
  pl: { translation: pl },
  ru: { translation: ru },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pl",
    lng: "pl",
    interpolation: { escapeValue: false },
  });

export default i18n;