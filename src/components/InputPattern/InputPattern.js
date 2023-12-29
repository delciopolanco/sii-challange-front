import { PatternFormat } from "react-number-format";

export const InputPattern = ({
  label,
  placeHolder,
  name,
  value,
  errors,
  onChange,
  format,
  mask,
  type,
}) => {
  const handleValueChange = (values) => {
    onChange && onChange(values.value);
  };

  return (
    <div className="grid grid-rows-[min-content_min-content_min-content] gap-1">
      {label && (
        <label htmlFor={name} className="xs:text-xl text-sm font-bold">
          {label}
        </label>
      )}
      <PatternFormat
        valueIsNumericString
        format={format}
        name={name}
        id={name}
        className="border p-1 md:p-2 rounded-lg"
        placeholder={placeHolder}
        aria-invalid="true"
        aria-describedby={`${name}-error`}
        onValueChange={handleValueChange}
        value={value || ""}
        mask={mask}
        type={type}
      />
      {errors && errors[name] && (
        <p className="text-xs md:text-sm text-red">{`* ${errors[name]?.message}`}</p>
      )}
    </div>
  );
};
