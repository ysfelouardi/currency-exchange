import { ChangeEventHandler, memo } from "react";
import { RadioWrapper } from "./styles";

interface RadioProps {
  name: string;
  label: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function RadioButton({ name, label, value, onChange }: RadioProps) {
  return (
    <RadioWrapper>
      <input
        name={name}
        id={value}
        type={"radio"}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={value}>{label}</label>
    </RadioWrapper>
  );
}

export default memo(RadioButton);
