import styled from "styled-components/macro";
import { InputWrapper, StyledInput } from "../Input/styles";

export const SelectWrapper = styled(InputWrapper)`
  min-width: 200px;
`;

export const StyledSelect = styled(StyledInput)<{ hasError?: boolean }>`
  outline: none;
  text-transform: lowercase;
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;
