import { InputForm } from "components/InputForm/InputForm";
import { InputFormPattern } from "components/InputForm/InputFormPattern";
import { Button } from "components/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreditCardSchema } from "./Form.schema";
import { useTranslation } from "react-i18next";

export const Form = ({ handleSubmit }) => {
  const { t } = useTranslation();
  const form = useForm({
    defaultValues: {
      creditcardHolderName: "",
      creditcardNumber: "",
      creditcardCVV: "",
      creditcardExpireDate: "",
    },
    resolver: yupResolver(CreditCardSchema),
    mode: "all",
  });

  const onSubmit = () => {
    if (form.trigger() && form.formState.isValid) {
      handleSubmit(form.getValues());
    }
  };

  const onCancel = () => {
    form.clearErrors();
  };

  return (
    <FormProvider {...form}>
      <form className="border border-black bg-white p-20 grid grid-rows-2 w-full max-w-[800px] gap-14">
        <div className="grid grid-cols-[1fr_1fr] gap-12">
          <InputFormPattern
            label={"Número de Tarjeta"}
            name={"creditcardNumber"}
            format={"#### #### #### ####"}
          />
          <InputFormPattern
            format="##/##"
            label={"Fecha Vencimiento"}
            name={"creditcardExpireDate"}
          />
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-12">
          <InputForm label={"Nombre Titular"} name={"creditcardHolderName"} />
          <InputFormPattern
            label={"CVV"}
            name={"creditcardCVV"}
            type={"password"}
            format={"###"}
          />
        </div>
        <DevTool control={form.control} />
        <div className="flex flex-row gap-5">
          <Button label={t("addCard")} type={"button"} onClick={onSubmit} />
          <Button
            outline
            label={t("cancel")}
            type={"button"}
            onClick={onCancel}
          />
        </div>
      </form>
    </FormProvider>
  );
};
