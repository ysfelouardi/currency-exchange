import styled, { css } from "styled-components";

export const HistoryOpsWrapper = styled.div<{
  hasError?: boolean;
  isLoading?: boolean;
}>`
  padding-top: 30px;

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
