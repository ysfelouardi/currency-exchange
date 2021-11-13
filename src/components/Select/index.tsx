import { ChangeEventHandler, memo } from "react";
import { SelectWrapper, StyledSelect } from "./styles";
import { Label } from "../Input/styles";

interface SelectProps {
  name: string;
  label: string;
  options: Array<{ value: string; text: string }>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({
  onChange,
  name,
  label,
  options = [],
  value,
}: SelectProps) => {
  return (
    <SelectWrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect name={name} onChange={onChange} value={value} as={"select"}>
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default memo(Select);
