import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import translationPL from "../locales/pl/translationPL.json";
import translationEN from "../locales/en/translationEN.json"

const resources =  {
    en:{
        translation:translationEN
    },
    pl:{
        translation: translationPL
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:"pl",
        keySeparator:false,
        interpolation:{
            escapeValue:false
        }
    });

export default i18n;
