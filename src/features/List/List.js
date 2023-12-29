import { useTranslation } from "react-i18next";
import { Paginator } from "components/Paginator/Paginator";
import { CreditCardListItem } from "components/CreditCardListItem/CreditCardListItem";
import { useGetAllCreditcards } from "hooks/useCreditcard";

export const List = ({ page, onPageChange }) => {
  const { creditcards, isFetching, isSuccess } = useGetAllCreditcards(page, 5);
  const { t } = useTranslation();

  if (isSuccess && !creditcards?.list?.length) {
    return (
      <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md p-2 h-[500px]">
        <h3 className="md:text-2xl">{t("creditCards")}</h3>
        <div className="p-4 flex-grow md:text-md text-xs text-center mt-10">
          {t("thereIsNoCreditCardYet")}
        </div>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md p-2 h-[500px]">
        <h3 className="md:text-2xl">{t("creditCards")}</h3>
        <div className="p-4 flex-grow">
          {Array.from({ length: 5 }).map((_, i) => (
            <CreditCardListItem key={i} creditcard={{}} isFetching />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md p-2 h-[500px]">
      <h3 className="md:text-2xl">{t("creditCards")}</h3>
      <div className="p-4 flex-grow">
        {creditcards?.list?.map((creditcard) => (
          <CreditCardListItem key={creditcard.id} creditcard={creditcard} />
        ))}
      </div>
      <Paginator
        nextLbl={t("next")}
        previousLbl={t("previous")}
        currentPage={creditcards?.currentPage}
        onPageChange={(page) => onPageChange(page)}
        pages={creditcards?.pages}
        total={creditcards?.total}
        loading={false}
      />
    </div>
  );
};
