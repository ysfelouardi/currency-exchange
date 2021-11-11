import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 90px;
  height: 100%;

  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      padding: 10px;
      min-height: 90px;
      height: 100%;
      text-transform: uppercase;
      cursor: pointer;
      color: ${(props) => props.theme.colors.gray};
      font-weight: ${(props) => props.theme.fontWeight.regular};

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }

      &.active:before {
        content: "";
        height: 4px;
        width: 200px;
        background-color: ${(props) => props.theme.colors.primary};
        position: absolute;
        bottom: 0;
      }

      &.active {
        font-weight: ${(props) => props.theme.fontWeight.bold};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
