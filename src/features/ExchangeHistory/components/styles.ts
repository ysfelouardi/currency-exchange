import styled, { css } from "styled-components/macro";

export const ExchangeHistoryFiltersWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: flex-end;
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
`;

export const ExchangeHistoryContainer = styled.section`
  padding-top: 20px;
`;

export const ExchangeHistoryResultsWrapper = styled.div<{
  hasError?: boolean;
  isLoading?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;

  .col {
    width: 49%;
  }
  .col:first-child {
    margin-right: 20px;
  }

  ${({ hasError, theme, isLoading }) =>
    (hasError || isLoading) &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 340px;
      flex-direction: column;

      color: ${theme.colors.warn};
      font-weight: ${theme.fontWeight.body};
    `}
`;
