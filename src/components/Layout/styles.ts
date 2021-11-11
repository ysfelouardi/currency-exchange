import styled from "styled-components/macro";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.bg};
  min-height: 100vh;
  padding: 140px;
`;
