import { memo } from "react";
import { StyledForm } from "./styles";
import Input from "../../../components/Input";

function ConversionForm() {
  return (
    <StyledForm>
      <Input name={"Amount"} type={"number"} label={"Amount"} />
      <Input name={"From"} type={"text"} label={"From"} />
      <Input name={"To"} type={"text"} label={"To"} />
    </StyledForm>
  );
}

export default memo(ConversionForm);
