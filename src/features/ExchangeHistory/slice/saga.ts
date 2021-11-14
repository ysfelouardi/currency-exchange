import { call, put, takeLatest, select } from "redux-saga/effects";
import { historyRatesActions } from ".";
import { getHistoryRatesApi } from "./api";
import { ExchangeHistory, StatsType } from "./types";
import { getPreviousNDate, sleep } from "../../../helpers";
import { selectDuration } from "./selectors";
import {
  selectBaseCurrency,
  selectTargetCurrency,
} from "../../ConverterFeature/slice/selectors";

function* getHistoryRates() {
  try {
    const duration: number = yield select(selectDuration);
    const baseCurrency: string = yield select(selectBaseCurrency);
    const targetCurrency: string = yield select(selectTargetCurrency);

    if (baseCurrency === null || targetCurrency === null) {
      yield put(
        historyRatesActions.getHistoryRatesFailed(
          "Please fill in the conversion form!"
        )
      );
    } else {
      const today = new Date();
      today.setHours(24, 0, 0, 0); // last midnight
      const previousDate: Date = yield call(getPreviousNDate, {
        date: today,
        numberOfDays: duration,
      });

      console.log({ today, previousDate });

      //I ADDED THIS INTENTIONALLY CAUSE OF THE REQUEST LIMIT RATE ONN THE NOMICS API
      yield call(sleep);

      const baseData: Array<ExchangeHistory> = yield call(getHistoryRatesApi, {
        currency: baseCurrency,
        startDate: previousDate.toISOString(),
        endDate: today.toISOString(),
      });

      yield call(sleep);

      const targetData: Array<ExchangeHistory> = yield call(
        getHistoryRatesApi,
        {
          currency: targetCurrency,
          startDate: previousDate.toISOString(),
          endDate: today.toISOString(),
        }
      );

      const resultData: Array<ExchangeHistory> = baseData.map(
        (e, index) =>
          ({
            timestamp: e.timestamp,
            rate: Number(Number(e.rate) / Number(targetData[index].rate)),
          } as unknown as ExchangeHistory)
      );

      const sortedHistoryRates = resultData
        .sort((a, b) => -a.timestamp.localeCompare(b.timestamp))
        .map((e) => ({
          timestamp: new Date(e.timestamp).toLocaleDateString("en-GB"),
          rate: e.rate,
        }));
      console.log("HISTORY RATES ", { resultData, sortedHistoryRates });

      const stats = sortedHistoryRates.reduce(
        (result, e) => ({
          ...result,
          max: Number(e.rate) > result.max ? Number(e.rate) : result.max,
          min: Number(e.rate) < result.min ? Number(e.rate) : result.min,
          sum: result.sum + Number(e.rate),
        }),
        { max: Number.MIN_VALUE, min: Number.MAX_VALUE, sum: 0 }
      );

      const properStats: Array<StatsType> = [
        { type: "Lowest", rate: stats.min },
        { type: "Highest", rate: stats.max },
        { type: "Average", rate: stats.sum / sortedHistoryRates.length },
      ];

      yield put(historyRatesActions.gotStatistics(properStats));

      yield put(historyRatesActions.gotHistoryRates(sortedHistoryRates));
    }
  } catch (e) {
    console.error("error getting history rates  ....", e);
    yield put(
      historyRatesActions.getHistoryRatesFailed(
        "something went wrong try again!"
      )
    );
  }
}

export function* HistoryRatesSaga() {
  yield takeLatest(historyRatesActions.getHistoryRates.type, getHistoryRates);
}
