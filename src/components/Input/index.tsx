import { forwardRef, memo } from "react";
import { InputWrapper, Label, StyledInput } from "./styles";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  className?: string;
  type: "text" | "number";
  value?: string;
  error?: string;
}

const Input = forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<any>>
>(({ onChange, name, label, value, type = "text", className, error }, ref) => {
  return (
    <InputWrapper className={className} hasError={!!error}>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        ref={ref}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        hasError={!!error}
        {...(type === "number" && { min: 0 })}
      />
      <p className={"error-message"}>{error}</p>
    </InputWrapper>
  );
});

export default memo(Input);
