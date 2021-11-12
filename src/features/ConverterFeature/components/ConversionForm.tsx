import { memo, useCallback } from "react";
import { StyledForm } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ReactComponent as CompareIcon } from "../../../assets/svgs/compare_arrows_black_24dp.svg";
import { SubmitHandler, useForm } from "react-hook-form";

interface ConversionFormValues {
  Amount: number;
  From: string;
  To: string;
}

function ConversionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConversionFormValues>();

  console.log({ errors });

  const onSubmit: SubmitHandler<ConversionFormValues> = useCallback((data) => {
    console.log({ data });
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={"number"}
        label={"Amount"}
        {...register("Amount", {
          required: "* required!",
          validate: {
            value: (v: number) => v > 0 || "* only positive amounts",
          },
        })}
        error={errors?.Amount?.message}
      />
      <Input
        className={"col2"}
        type={"text"}
        label={"From"}
        {...register("From", {
          required: "* required!",
        })}
        error={errors?.From?.message}
      />
      <Button
        htmlType="button"
        variant="secondary"
        startIcon={<CompareIcon />}
      />
      <Input
        className={"col2"}
        type={"text"}
        label={"To"}
        {...register("To", {
          required: "* required!",
        })}
        error={errors?.To?.message}
      />
      <Button htmlType="submit" variant="primary" text={"convert"} />
    </StyledForm>
  );
}

export default memo(ConversionForm);
