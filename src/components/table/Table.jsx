import React from "react";
import "./table.scss";

const showChildren = (children, level = 1) => {
  return children.map((child) => (
    <React.Fragment key={child.id}>
      <tr>
        <td
          style={{
            paddingLeft: `${level * 20}px`,
            fontWeight: child.font_weight,
            fontStyle: child.font_style,
            textAlign: child.text_align,
            fontSize: `${child.font_size}px`,
          }}
        >
          {child.name}
        </td>
        <td colSpan={4}></td>
      </tr>
      {child.children && child.children.length > 0
        ? showChildren(child.children, level + 1)
        : null}
    </React.Fragment>
  ));
};

const Table = ({ columns, rows }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th></th>
          {columns.map((col) => (
            <th
              key={col.id}
              style={{
                fontWeight: col.font_weight,
                fontStyle: col.font_style,
                textAlign: col.text_align,
                fontSize: `${col.font_size}px`,
              }}
            >
              {col.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              <td
                style={{
                  fontWeight: row.font_weight,
                  fontStyle: row.font_style,
                  textAlign: row.text_align,
                  fontSize: `${row.font_size}px`,
                }}
              >
                {row.name}
              </td>
              {columns.map((col) => (
                <td key={`${row.id}-${col.id}`}>
                  {row.name} - {col.name}
                </td>
              ))}
            </tr>
            {row.children && showChildren(row.children)}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
