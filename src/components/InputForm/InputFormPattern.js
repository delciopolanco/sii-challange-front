import { InputPattern } from "components/InputPattern/InputPattern";
import { useFormContext, Controller } from "react-hook-form";

export const InputFormPattern = ({
  name,
  value,
  onChange,
  format,
  mask,
  type,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        <InputPattern
          mask={mask}
          format={format}
          name={name}
          value={field.value}
          type={type}
          errors={errors}
          onChange={(val) => {
            field.onChange(val);
            onChange && onChange(val);
          }}
          {...props}
        />
      )}
    />
  );
};
