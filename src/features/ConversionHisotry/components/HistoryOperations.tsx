import React, { memo, useCallback, useEffect, useMemo } from "react";
import Table from "../../../components/Table";
import { HistoryOpsWrapper } from "./styles";
import { useHistoryOperationsSlice } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectOperations,
} from "../slice/selectors";
import Spinner from "../../../components/Spinner";
import ActionButtons from "./ActionButtons";
import { ConversionFormValues } from "../../ConverterFeature/slice/types";
import { converterActions } from "../../ConverterFeature/slice";
import { useNavigate } from "react-router-dom";

const headers = ["Date", "Event", "Actions"];

function HistoryOperations() {
  const { actions } = useHistoryOperationsSlice();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const operations = useSelector(selectOperations);

  const handleViewOp = useCallback(
    (data: ConversionFormValues) => {
      dispatch(converterActions.convertAmount(data));
      navigate("/", { replace: true });
    },
    [dispatch, navigate]
  );
  const handleDeleteOp = useCallback((id: string) => {}, []);

  const mappedOperations = useMemo(
    () =>
      operations.map((op) => ({
        event: op.event,
        date: op.date,
        actions: (
          <ActionButtons
            handleDelete={() => handleDeleteOp(op.id as string)}
            handleView={() => handleViewOp(op.data as ConversionFormValues)}
          />
        ),
      })),
    [operations, handleViewOp, handleDeleteOp]
  );

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
      <Table headers={headers} rows={mappedOperations} />
    </HistoryOpsWrapper>
  );
}

export default memo(HistoryOperations);
