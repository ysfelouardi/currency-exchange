import React, { memo, useEffect } from "react";
import Table from "../../../components/Table";
import { HistoryOpsWrapper } from "./styles";
import { useHistoryOperationsSlice } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectMappedOps,
  selectOperations,
} from "../slice/selectors";
import Spinner from "../../../components/Spinner";

const headers = ["Date", "Event", "Actions"];

function HistoryOperations() {
  const { actions } = useHistoryOperationsSlice();
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const mappedOps = useSelector(selectMappedOps);

  useEffect(() => {
    dispatch(actions.loadOperations());
  }, [dispatch, actions]);

  if (loading) {
    return (
      <HistoryOpsWrapper isLoading={loading}>
        <Spinner />
      </HistoryOpsWrapper>
    );
  }

  if (error) {
    return (
      <HistoryOpsWrapper hasError={!!error}>
        <p className="error-message">{error}</p>
      </HistoryOpsWrapper>
    );
  }

  return (
    <HistoryOpsWrapper>
      <Table headers={headers} rows={mappedOps} />
    </HistoryOpsWrapper>
  );
}

export default memo(HistoryOperations);
