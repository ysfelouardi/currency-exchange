import { ChangeEventHandler, memo } from "react";
import { InputWrapper, Label, StyledInput } from "./styles";

interface InputProps {
  label: string;
  name: string;
  type: "text" | "number";
  value?: string;
  onChange?: ChangeEventHandler;
}

function Input({ label, value, name, type = "text", onChange }: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        min="0"
      />
    </InputWrapper>
  );
}

export default memo(Input);
