import { memo } from "react";
import Button from "../../../components/Button";
import { ActionButtonsContainer } from "./styles";
import { ReactComponent as Eye } from "../../../assets/svgs/visibility_black_24dp.svg";
import { ReactComponent as Trash } from "../../../assets/svgs/delete_black_24dp.svg";

interface ActionButtonsProps {
  handleView: () => void;
  handleDelete: () => void;
}

function ActionButtons({ handleView, handleDelete }: ActionButtonsProps) {
  return (
    <ActionButtonsContainer className="action-buttons">
      <Button
        text={"View"}
        variant={"ghost"}
        startIcon={<Eye className={"view"} />}
        onClick={handleView}
      />
      <Button
        text={"Delete from history"}
        variant={"danger"}
        startIcon={<Trash className={"delete"} />}
        onClick={handleDelete}
      />
    </ActionButtonsContainer>
  );
}

export default memo(ActionButtons);
