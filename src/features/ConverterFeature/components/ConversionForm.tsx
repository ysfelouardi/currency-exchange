import { memo, useCallback } from "react";
import { StyledForm } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ReactComponent as SwitchIcon } from "../../../assets/svgs/compare_arrows_black_24dp.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { converterActions } from "../slice";

interface ConversionFormValues {
  amount: number;
  from: string;
  to: string;
}

function ConversionForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ConversionFormValues>();

  console.log({ errors });

  const onSubmit: SubmitHandler<ConversionFormValues> = useCallback(
    (data) => {
      console.log({ data });

      dispatch(converterActions.convertAmount(data));
    },
    [dispatch]
  );

  const handleSwitchValues = useCallback(() => {
    const [from, to] = getValues(["from", "to"]);
    if (from !== "" && to !== "") {
      console.log({ from, to });
      setValue("from", to);
      setValue("to", from);
    }
  }, [getValues, setValue]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={"number"}
        label={"amount"}
        {...register("amount", {
          required: "* required!",
          validate: {
            value: (v: number) => v > 0 || "* only positive amounts",
          },
        })}
        error={errors?.amount?.message}
      />
      <Input
        className={"col2"}
        type={"text"}
        label={"from"}
        {...register("from", {
          required: "* required!",
          setValueAs: (v) => v.toUpperCase(),
        })}
        error={errors?.from?.message}
      />
      <Button
        htmlType="button"
        variant="secondary"
        startIcon={<SwitchIcon />}
        onClick={handleSwitchValues}
      />
      <Input
        className={"col2"}
        type={"text"}
        label={"to"}
        {...register("to", {
          required: "* required!",
          setValueAs: (v) => v.toUpperCase(),
        })}
        error={errors?.to?.message}
      />
      <Button htmlType="submit" variant="primary" text={"convert"} />
    </StyledForm>
  );
}

export default memo(ConversionForm);
