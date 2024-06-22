import React from "react";
import Table from "./components/table/Table";
import data from "../db.json";
import "./App.scss";

const tableInfo = (data) => {
  const columns = data.filter((item) => item.place === "top");
  const rows = data.filter((item) => item.place === "left");
  return { columns, rows };
};

const App = () => {
  const { columns, rows } = tableInfo(data);

  return (
    <div className="App">
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default App;
