import styled from "styled-components/macro";

export const StyledInput = styled.input`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
  height: 35px;
  border: none;
  background-color: inherit;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-bottom: 2px solid ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.dark};
  display: block;
  ${({ disabled }) => disabled && "cursor : not-allowed;"}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  text-transform: capitalize;
  display: block;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
