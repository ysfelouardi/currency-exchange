import { takeLatest, call, put } from "redux-saga/effects";
import { historyOperationsActions } from ".";
import { getConversionFormData, getProperDateString } from "../../../helpers";
import { ConversionFormValues } from "../../ConverterFeature/slice/types";
import { operation } from "./types";

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

export function* HistoryOperationsSaga() {
  yield takeLatest(
    historyOperationsActions.loadOperations.type,
    loadOperations
  );
}
