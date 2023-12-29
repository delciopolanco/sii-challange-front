export const Input = ({
  label,
  placeHolder,
  name,
  value,
  errors,
  onChange,
}) => {
  return (
    <div className="grid grid-rows-[min-content_min-content_min-content] gap-1">
      {label && (
        <label htmlFor={name} className="md:text-xl text-sm font-bold">
          {label}
        </label>
      )}
      <input
        className="border p-1 md:p-2 rounded-lg"
        type={"text"}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {errors && errors[name] && (
        <p className="text-xs md:text-sm text-red">{`* ${errors[name]?.message}`}</p>
      )}
    </div>
  );
};
