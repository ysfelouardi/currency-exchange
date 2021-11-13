import { takeLatest, call, put, all, select } from "redux-saga/effects";
import { historyOperationsActions } from ".";
import {
  getConversionFormData,
  getProperDateString,
  saveOperationsToStorage,
} from "../../../helpers";
import { ConversionFormValues } from "../../ConverterFeature/slice/types";
import { operation } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";
import { selectOperations } from "./selectors";

function* loadOperations() {
  try {
    const stored: Array<ConversionFormValues & { timestamp: string }> =
      yield call(getConversionFormData);

    const operations: Array<operation> = stored.map(
      ({ from, to, amount, timestamp }) => ({
        date: getProperDateString(timestamp),
        event: `Converted an amount of ${amount} from ${from} to ${to}`,
        data: { from, to, amount },
        id: timestamp,
      })
    );

    console.log({ stored, operations });

    yield put(historyOperationsActions.gotOperations(operations));
  } catch (e) {
    console.log("error while getting operations ", e);
    yield put(
      historyOperationsActions.gotOperationsFailed(
        "something went wrong refresh the page !"
      )
    );
  }
}

function* deleteOperation(action: PayloadAction<string>) {
  try {
    const operations: Array<operation> = yield select(selectOperations);

    const filteredOperations = operations.filter(
      (op) => op.id !== action.payload
    );

    yield put(historyOperationsActions.operationDeleted(filteredOperations));

    yield call(
      saveOperationsToStorage,
      filteredOperations.map(
        (op) =>
          ({ ...op.data, timestamp: op.id } as ConversionFormValues & {
            timestamp: string;
          })
      )
    );
  } catch (e) {}
}

export function* HistoryOperationsSaga() {
  yield all([
    takeLatest(historyOperationsActions.loadOperations.type, loadOperations),
    takeLatest(historyOperationsActions.deleteOperation.type, deleteOperation),
  ]);
}
