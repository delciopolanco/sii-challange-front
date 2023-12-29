import classNames from "classnames";

export const Button = ({
  label,
  type,
  disabled,
  onClick,
  outline,
  fullWidth,
  leftIcon,
  rigthIcon,
}) => {
  const clasess = classNames({
    "w-auto p-5 shadow content-center h-10 text-sm md:text-lg rounded-full font-semibold hover:cursor-pointer grid grid-cols-[1fr_auto]": true,
    "text-white bg-primary hover:bg-primaryLight": !outline,
    "text-gray-900 bg-gray-200 hover:bg-gray-100": outline,
    "w-full": fullWidth,
  });

  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clasess}
    >
      {leftIcon ?? leftIcon}
      <span>{label}</span>
      {rigthIcon ?? rigthIcon}
    </button>
  );
};
