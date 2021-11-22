import styled from "styled-components/macro";

export const StyledFooter = styled.footer`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 15%) -1px 2px 11px 0px;
  background-color: white;
  a {
    border-bottom: 1px solid ${(props) => props.theme.colors.accent};
    text-decoration: none;
    color: inherit;
  }
`;
