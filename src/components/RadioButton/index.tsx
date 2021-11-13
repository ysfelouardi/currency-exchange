import { ChangeEventHandler, memo } from "react";
import { RadioWrapper } from "./styles";

interface RadioProps {
  name: string;
  label: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

function RadioButton({
  name,
  label,
  value,
  onChange,
  checked = false,
}: RadioProps) {
  return (
    <RadioWrapper>
      <input
        name={name}
        id={value}
        type={"radio"}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={value}>{label}</label>
    </RadioWrapper>
  );
}

export default memo(RadioButton);
