import creditCard from "assets/imgs/creditcard.png";

export const Card = () => {
  return (
    <div className="absolute left-[50%] lg:top-[-30%] top-[-40%] transform -translate-x-1/2">
      <img
        src={creditCard}
        className="lg:max-w-xs max-w-[300px] "
        alt="creditcard"
      />
    </div>
  );
};
