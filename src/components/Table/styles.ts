import styled from "styled-components/macro";

export const StyledTable = styled.table`
  background: white;
  box-shadow: rgb(0 0 0 / 15%) -1px 2px 11px 0px;

  border-spacing: 0;
  width: 100%;

  th,
  td {
    padding: 20px;
    text-transform: capitalize;
  }

  th {
    color: ${(props) => props.theme.colors.gray};
    text-align: left;
  }

  tbody tr {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }
  }
`;
