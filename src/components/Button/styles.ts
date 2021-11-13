import styled, { css } from "styled-components/macro";

export const StyledButton = styled.button<{
  variant?: "primary" | "secondary" | "ghost" | "danger";
}>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  background: white;
  border: none;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 15%) -1px 2px 11px 0px;
  border-radius: 2px;
  padding: 5px 10px;
  text-transform: uppercase;

  &:hover {
    box-shadow: rgb(0 0 0 / 25%) -1px 2px 11px 0px;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${theme.colors.primary};
          color: white;
          svg {
            fill: white;
          }
        `;
      case "secondary":
        return css`
          background-color: white;
          color: ${theme.colors.primary};
          svg {
            fill: ${theme.colors.primary};
          }
        `;
      case "ghost":
        return css`
          background-color: inherit;
          color: ${theme.colors.primary};
          box-shadow: none;
          &:hover {
            background-color: #00968814;
            box-shadow: none;
          }
        `;

      case "danger":
        return css`
          background-color: inherit;
          color: ${theme.colors.warn};
          box-shadow: none;
          &:hover {
            background-color: #00968814;
            box-shadow: none;
          }
        `;
      default:
        break;
    }
  }}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      cursor: no-drop;
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.gray};
      box-shadow: none;
      &:hover {
        background-color: ${theme.colors.lightGray};
        box-shadow: none;
      }
    `}
`;
