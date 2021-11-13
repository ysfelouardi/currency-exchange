import config from "../../../config";
import { http, HTTP_METHODS } from "../../../utils/http";

export const getHistoryRatesApi = ({
  currency,
  startDate,
  endDate,
}: {
  currency: string;
  startDate: string;
  endDate: string;
}) =>
  http(
    `exchange-rates/history?key=${config.NOMICS_API_KEY}&currency=${currency}&start=${startDate}&end=${endDate}`,
    HTTP_METHODS.GET
  );
