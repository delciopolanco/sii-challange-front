import { useTranslation } from "react-i18next";
import { Paginator } from "components/Paginator/Paginator";

export const List = ({ creditCards }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md p-2">
      <h3 className="md:text-2xl">{t("creditCards")}</h3>
      <div className="p-4 ">
        {creditCards?.map((creditcard) => (
          <div
            className="relative border-solid border-b-2 border-neutral-100 p-4"
            key={creditcard.id}
          >
            <div className="md:text-md text-xs grid grid-cols-[1fr_auto]">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-md">
                  {creditcard.creditCardHolderName}
                </span>
                <span className="font-normal">
                  {creditcard.creditcardNumber}
                </span>
              </div>
              <div className="font-bold">{creditcard.creditcardExpireDate}</div>
            </div>
          </div>
        ))}
      </div>
      <Paginator
        nextLbl={t("next")}
        previousLbl={t("previous")}
        currentPage={1}
        onPageChange={() => {}}
        pages={1}
        total={1}
        loading={false}
      />
    </div>
  );
};
