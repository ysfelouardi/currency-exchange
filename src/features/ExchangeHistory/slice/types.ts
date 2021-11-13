export type ExchangeHistory = {
  rate: string;
  timestamp: string;
};

export type StatsType = {
  type: "Lowest" | "Highest" | "Average";
  rate: number;
};

export type ExchangeHistoryState = {
  loading: boolean;
  error: string | null;
  historyData: Array<ExchangeHistory>;
  duration: number;
  statistics: Array<StatsType>;
  displayedView: "table" | "chart";
};
