import { renderCell } from "../tableCell/TableCell";

const TableHeader = ({ columns }) => (
  <thead>
    <tr>
      <th></th>
      {columns.map((col) => renderCell(col, 1))}
    </tr>
  </thead>
);

export default TableHeader;
