import { memo } from "react";
import Table from "../../../components/Table";
import { HistoryOpsWrapper } from "./styles";

function HistoryOperations() {
  return (
    <HistoryOpsWrapper>
      <Table headers={["Date", "Event", "Actions"]} rows={[]} />
    </HistoryOpsWrapper>
  );
}

export default memo(HistoryOperations);
