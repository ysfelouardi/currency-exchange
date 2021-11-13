import { memo } from "react";
import { StyledTable } from "./styles";

interface TableProps {
  headers: Array<string>;
  rows: Array<object>;
}

function Table({ headers = [], rows = [] }: TableProps) {
  return (
    <StyledTable>
      {headers.length && (
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {rows.map((row, index) => (
          <tr key={`row-${index}`}>
            {Object.values(row).map((c) => (
              <td key={c}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default memo(Table);
