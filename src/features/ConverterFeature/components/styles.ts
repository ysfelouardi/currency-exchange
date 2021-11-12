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
