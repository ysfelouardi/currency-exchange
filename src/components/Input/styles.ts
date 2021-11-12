import styled, { css } from "styled-components/macro";

export const StyledInput = styled.input<{ hasError?: boolean }>`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
  height: 35px;
  border: none;
  background-color: inherit;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-bottom: 2px solid ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.dark};
  display: block;
  text-transform: uppercase;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${(props) => props.theme.colors.warn};
    `}
`;

export const InputWrapper = styled.div<{ hasError?: boolean }>`
  display: flex;
  flex-direction: column;

  p.error-message {
    height: 10px;
    padding-top: 5px;
    color: ${(props) => props.theme.colors.warn};
    visibility: ${({ hasError = false }) => (hasError ? "visible" : "hidden")};
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  text-transform: capitalize;
  display: block;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
