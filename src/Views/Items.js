import React, { useContext } from "react";
import ItemList from "../Components/ItemList";
import { ModalContext } from "../Layouts/MainLayout";
import { itemsData } from "../dataSource";

function Items() {
  const ModalFunctions = useContext(ModalContext);
  const columns = [
    { title: "Items", field: "name" },
    { title: "Date", field: "date" },
    { title: "Get by date", field: "date" },
    { title: "Location", field: "location" }
  ];
  return (
    <div>
      <ItemList
        columns={columns}
        data={itemsData}
        title='MainList'
        showDetails={(rowData) => {
          ModalFunctions.setIsModalOpen(true);
          ModalFunctions.setItemData(rowData);
        }}
      />
    </div>
  );
}

export default Items;
