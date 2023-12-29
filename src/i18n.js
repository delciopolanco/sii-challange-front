import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const validations = {
  required: "Requerido",
  charactersMin: "El valor mínimo de carácteres es de {{count}} carácteres",
  charactersMax: "El valor máximo de carácteres es de {{count}} carácteres",
  specifyAValidExpirationDate: "Especifique una fecha de expiración válida",
  onlyLetters: "El campo solo permite valores alfanuméricos",
};

const resources = {
  es: {
    translation: {
      ...validations,
      addCard: "Agregar Tarjeta",
      cancel: "Cancelar",
      creditcardNumber: "Número de Tarjeta",
      expirationDate: "Fecha Vencimiento",
      cvv: "CVV",
      ownerName: "Nombre Titular",
      creditCards: "Tarjetas de créditos",
      next: "Próximo",
      previous: "Anterior",
      thereIsNoCreditCardYet:
        "No hay tarjetas de crédito agregadas, agrega tu primera tarjeta.",
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
