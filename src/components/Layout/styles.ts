import styled from "styled-components/macro";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.bg};
  min-height: 100vh;
  padding: 140px;
  hr {
    border-top: 1px solid #b7b3b33d;
  }
`;
