import React from "react";
import MaterialTable from "material-table";
function RowContainer({ rowData }) {
  return (
    <div>
      <p>Name: {rowData.name}</p>
      <p>Date: {rowData.date}</p>
      <p>Description: {rowData.description}</p>
    </div>
  );
}

export default RowContainer;
