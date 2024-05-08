import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./mydatatable.scss";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, Name: "Pizza" },
  { id: 2, Name: "Burger" },
  { id: 3, Name: "Bacon" },
  { id: 4, Name: "Omelette" },
  { id: 5, Name: "French Fries" },
  { id: 6, Name: "Sundae" },
  { id: 7, Name: "Fish n chips" },
  { id: 8, Name: "Coca-cola" },
  { id: 9, Name: "Muffins" },
  { id: 10, Name: "Croissant" },
];

const MyDatatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">All Data</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;