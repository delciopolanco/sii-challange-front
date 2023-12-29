import * as yup from "yup";
import * as i18n from "i18next";

export const CreditCardSchema = yup.object().shape({
  creditcardHolderName: yup
    .string()
    .nullable()
    .required(`${i18n.t("required")}`)
    .max(20, `${i18n.t("charactersMax", { count: 20 })}`),
  creditcardNumber: yup
    .string()
    .nullable()
    .required(`${i18n.t("required")}`)
    .min(16, `${i18n.t("charactersMin", { count: 16 })}`),
  creditcardCVV: yup
    .string()
    .nullable()
    .required(`${i18n.t("required")}`)
    .min(3, `${i18n.t("charactersMin", { count: 3 })}`),
  creditcardExpireDate: yup
    .string()
    .nullable()
    .required(`${i18n.t("required")}`)
    .test("expirateDate", i18n.t("specifyAValidExpirationDate"), (value) => {
      const pattern = /^(0[1-9]|1[0-2])\d{2}$/;

      if (!pattern.test(value)) {
        return false;
      }
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;

      const inputMonth = Number(value.substring(0, 2));
      const inputYear = Number(value.substring(2, 4));

      if (
        (inputYear >= currentYear && inputMonth > currentMonth) ||
        inputYear > currentYear
      ) {
        return true;
      }
      return false;
    }),
});
