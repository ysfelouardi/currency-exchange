import { memo } from "react";
import { StyledForm } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ReactComponent as CompareIcon } from "../../../assets/svgs/compare_arrows_black_24dp.svg";

function ConversionForm() {
  return (
    <StyledForm>
      <Input name={"Amount"} type={"number"} label={"Amount"} />
      <Input className={"col2"} name={"From"} type={"text"} label={"From"} />
      <Button
        htmlType="button"
        variant="secondary"
        startIcon={<CompareIcon />}
      />
      <Input className={"col2"} name={"To"} type={"text"} label={"To"} />
      <Button htmlType="button" variant="primary" text={"convert"} />
    </StyledForm>
  );
}

export default memo(ConversionForm);
