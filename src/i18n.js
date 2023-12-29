import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const validations = {
  required: "requerido",
  charactersMin: "El valor mínimo de carácteres es de {{count}} carácteres",
  charactersMax: "El valor máximo de carácteres es de {{count}} carácteres",
  specifyAValidExpirationDate: "Especifique una fecha de expiración válida",
};

const resources = {
  es: {
    translation: {
      ...validations,
      addCard: "Agregar Tarjeta",
      cancel: "Cancelar",
    },
  },
  en: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
