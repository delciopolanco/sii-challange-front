export const CreditCardListItem = ({ creditcard, isFetching }) => {
  if (isFetching) {
    return (
      <div className="relative border-solid border-b-2 border-neutral-100 p-4 mt-5">
        <div className="md:text-md text-xs grid grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-2">
            <div className="bg-gray-400 animate-pulse w-52 h-2 rounded-sm" />
            <div className="bg-gray-400 animate-pulse w-32 h-2 rounded-sm" />
          </div>
          <div className="bg-gray-400 animate-pulse w-8 h-3 rounded-sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative border-solid border-b-2 border-neutral-100 p-4">
      <div className="md:text-md text-xs grid grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-md">
            {creditcard.creditcardHolderName}
          </span>
          <span className="font-normal">{creditcard.creditcardNumber}</span>
        </div>
        <div className="font-bold">{creditcard.creditcardExpireDate}</div>
      </div>
    </div>
  );
};
