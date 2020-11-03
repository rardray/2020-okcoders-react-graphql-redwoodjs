import React from "react";
import MaterialTable from "material-table";

function ItemList() {
  return (
    <MaterialTable columns={columns} data={data} title={title}></MaterialTable>
  );
}

export default ItemList;
