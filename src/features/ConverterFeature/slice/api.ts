import config from "../../../config";
import { http, HTTP_METHODS } from "../../../utils/http";

export const getExchangeRatesApi = () =>
  http(`exchange-rates?key=${config.NOMICS_API_KEY}`, HTTP_METHODS.GET);
