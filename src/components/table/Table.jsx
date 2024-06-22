import TableBody from "../tableBody/TableBody";
import TableHeader from "../tableHeader/TableHeader";
import "./table.scss";

const Table = ({ columns, rows }) => (
  <table className="custom-table">
    <TableHeader columns={columns} />
    <TableBody columns={columns} rows={rows} />
  </table>
);

export default Table;
