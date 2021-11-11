import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  min-height: 80px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgb(0 0 0 / 15%) -1px 2px 11px 0px;
  background-color: white;
  position: fixed;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: row;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeight.regular};

  svg {
    fill: ${(props) => props.theme.colors.primary};
  }

  strong {
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`;
