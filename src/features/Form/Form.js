import { InputForm } from "components/InputForm/InputForm";
import { InputFormPattern } from "components/InputForm/InputFormPattern";
import { Button } from "components/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreditCardSchema } from "./Form.schema";
import { useTranslation } from "react-i18next";
import { Card } from "features/Card/Card";
import { useSaveCreditCard } from "hooks/useCreditcard";
import { Spinner } from "assets/icons/spinner";

export const Form = () => {
  const { save } = useSaveCreditCard();

  const { t } = useTranslation();
  const form = useForm({
    defaultValues: {
      creditcardHolderName: "",
      creditcardNumber: "",
      creditcardCVV: "",
      creditcardExpireDate: "",
    },
    resolver: yupResolver(CreditCardSchema),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.trigger() && form.formState.isValid) {
      try {
        await save.mutateAsync(form.getValues());
        onCancel();
      } catch (error) {
        // TODO
      }
    }
  };

  const onCancel = (e) => {
    if (e) e.preventDefault();
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form className="border rounded-md border-black bg-white relative lg:p-8 p-2 md:w-auto w-full mt-20 shadow-md relative">
        <Card />
        <div className="grid grid-rows-2 w-full md:gap-8 mt-16">
          <div className="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr]  md:gap-12">
            <InputFormPattern
              label={t("creditcardNumber")}
              name={"creditcardNumber"}
              format={"#### #### #### ####"}
            />
            <InputFormPattern
              format="##/##"
              label={t("expirationDate")}
              name={"creditcardExpireDate"}
            />
          </div>
          <div className="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr] md:gap-12">
            <InputForm label={t("ownerName")} name={"creditcardHolderName"} />
            <InputFormPattern
              label={t("cvv")}
              name={"creditcardCVV"}
              type={"password"}
              format={"###"}
            />
          </div>
          <DevTool control={form.control} />
          <div className="flex flex-row gap-5 mt-5 md:mt-0">
            <Button label={t("addCard")} type={"button"} onClick={onSubmit} />
            <Button
              outline
              label={t("cancel")}
              type={"button"}
              onClick={onCancel}
            />
          </div>
        </div>

        {save.isPending && (
          <div className="absolute top-0 left-0 right-0 bottom-0 px-10 w-full z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <Spinner width={50} height={50} />
            <h2 className="text-center text-white text-xl font-semibold">
              {t("processing")}...
            </h2>
            <p className="w-full text-center text-white text-xs p-4">
              {t("itCoulTakeSomeTimeToProcess")}
            </p>
          </div>
        )}
      </form>
    </FormProvider>
  );
};
