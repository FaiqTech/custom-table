import React from "react";
import "./table.scss";

const showChildren = (children, level = 1) => {
  return children.map((child) => (
    <React.Fragment key={child.id}>
      <tr>
        <td style={{ paddingLeft: `${level * 20}px` }}>{child.name}</td>
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
            <th key={col.id}>{col.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              <td>{row.name}</td>
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
