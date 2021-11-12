import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    flex-grow: 1;
    margin-right: 15px;
  }

  div.col2 {
    flex-grow: 3;
  }

  button {
    margin: 0 20px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  flex-direction: column;
  color: ${(props) => props.theme.colors.gray};

  h1 {
    color: ${(props) => props.theme.colors.dark};
    font-size: 48px;
    font-weight: ${(props) => props.theme.fontWeight.regular};

    strong {
      color: ${(props) => props.theme.colors.accent};
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    padding: 40px 0;
  }

  p {
    display: flex;
    flex-direction: column;
    font-size: 18px;
  }
`;
