import React from "react";
import { renderCell } from "../tableCell/TableCell";

export const renderRow = (row, columns, level = 1) => (
  <React.Fragment key={row.id}>
    <tr>
      {renderCell(row, 1, level * 20)}
      {columns.map((col) =>
        renderCell({ ...col, name: `${row.name} - ${col.name}` }, 1)
      )}
    </tr>
    {row.children &&
      row.children.map((child) => renderRow(child, columns, level + 1))}
  </React.Fragment>
);
