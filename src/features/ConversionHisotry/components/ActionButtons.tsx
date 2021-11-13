import { memo } from "react";
import Button from "../../../components/Button";
import { ActionButtonsContainer } from "./styles";
import { ReactComponent as Eye } from "../../../assets/svgs/visibility_black_24dp.svg";
import { ReactComponent as Trash } from "../../../assets/svgs/delete_black_24dp.svg";

function ActionButtons() {
  return (
    <ActionButtonsContainer>
      <Button
        text={"View"}
        variant={"ghost"}
        startIcon={<Eye className={"view"} />}
      />
      <Button
        text={"Delete from history"}
        variant={"danger"}
        startIcon={<Trash className={"delete"} />}
      />
    </ActionButtonsContainer>
  );
}

export default memo(ActionButtons);
