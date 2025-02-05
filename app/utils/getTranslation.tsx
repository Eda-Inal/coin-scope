import en from "../locales/en.json"
import tr from "../locales/tr.json"
import de from "../locales/de.json"
const translations: { [key: string]: any } = { en, tr, de };

export const getTranslation = (locale: string) => {
    return translations[locale] || translations.en;
};