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
        <label htmlFor={name} className="text-xl font-bold">
          {label}
        </label>
      )}
      <input
        className="border p-3 rounded-lg"
        type={"text"}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {errors && errors[name] && (
        <p className="text-sm text-red">{`* ${errors[name]?.message}`}</p>
      )}
    </div>
  );
};
