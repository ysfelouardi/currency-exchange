import styled, { css } from "styled-components/macro";

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

  tbody tr div.action-buttons {
    visibility: hidden;
  }

  tbody tr:hover {
    div.action-buttons {
      visibility: visible;
    }
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  button svg {
    margin: 0 10px;
  }

  svg.delete {
    fill: ${(props) => props.theme.colors.warn};
  }

  svg.view {
    fill: ${(props) => props.theme.colors.primary};
  }
`;
