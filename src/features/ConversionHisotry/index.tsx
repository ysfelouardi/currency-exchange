import { memo } from "react";
import { PageTitle } from "../../components/common";
import HistoryOperations from "./components/HistoryOperations";

function ConversionHistory() {
  return (
    <>
      <PageTitle>Conversion History</PageTitle>
      <HistoryOperations />
    </>
  );
}

export default memo(ConversionHistory);
