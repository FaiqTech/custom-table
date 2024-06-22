import React from "react";
import "./table.scss";

const renderCell = (
  { name, font_weight, font_style, text_align, font_size },
  colSpan = 1,
  paddingLeft = 0
) => (
  <td
    colSpan={colSpan}
    style={{
      paddingLeft: `${paddingLeft}px`,
      fontWeight: font_weight,
      fontStyle: font_style,
      textAlign: text_align,
      fontSize: `${font_size}px`,
    }}
  >
    {name}
  </td>
);

const renderRow = (row, columns, level = 1) => (
  <>
    <tr key={row.id}>
      {renderCell(row, 1, level * 20)}
      {columns.map((col) =>
        renderCell({ ...col, name: `${row.name} - ${col.name}` }, 1, 0)
      )}
    </tr>
    {row.children &&
      row.children.map((child) => renderRow(child, columns, level + 1))}
  </>
);

const Table = ({ columns, rows }) => (
  <table className="custom-table">
    <thead>
      <tr>
        <th></th>
        {columns.map((col) => renderCell(col))}
      </tr>
    </thead>
    <tbody>{rows.map((row) => renderRow(row, columns))}</tbody>
  </table>
);

export default Table;
