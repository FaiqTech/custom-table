import { renderRow } from "../tableRow/Tablerow";

const TableBody = ({ columns, rows }) => (
  <tbody>{rows.map((row) => renderRow(row, columns))}</tbody>
);

export default TableBody;
