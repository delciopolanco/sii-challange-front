import { Input } from "components/Input/Input";
import { useFormContext, Controller } from "react-hook-form";

export const InputForm = ({ name, value, onChange, ...props }) => {
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
        <Input
          name={name}
          value={value}
          errors={errors}
          onChange={(e) => {
            field.onChange(e.target.value);
            onChange && onChange(e);
          }}
          {...props}
        />
      )}
    />
  );
};
