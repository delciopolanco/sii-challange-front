import { useTranslation } from "react-i18next";

export const List = ({ creditCards }) => {
  const { t } = useTranslation();
  return (
    <div className="md:w-[700px] flex flex-col gap-5 p-2">
      <h3 className="md:text-1xl underline">{t("addedCreditCards")}</h3>
      <table className="w-full">
        <thead className="font-semibold">
          <td width={"40%"} className="md:text-md text-xs">
            {t("ownerName")}
          </td>
          <td width={"30%"} className="md:text-md text-xs text-right">
            {t("creditcardNumber")}
          </td>
          <td width={"40%"} className="md:text-md text-xs text-right">
            {t("expirationDate")}
          </td>
        </thead>
        <tbody>
          {creditCards?.map((creditcard) => (
            <tr className="border" key={creditcard.id}>
              <td className="md:text-md text-xs font-semibold">
                {creditcard.creditCardHolderName}
              </td>
              <td className="md:text-md text-xs text-right">
                {creditcard.creditcardNumber}
              </td>
              <td className="md:text-md text-xs text-right">
                {creditcard.creditcardExpireDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
