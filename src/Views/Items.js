import React, { useContext } from "react";
import ItemList from "../Components/ItemList";
import { ModalContext } from "../Layouts/MainLayout";
import { itemsData } from "../dataSource";
import styled from "styled-components";

function Items() {
  const ModalFunctions = useContext(ModalContext);
  const columns = [
    { title: "Items", field: "name" },
    { title: "Date", field: "date" },
    { title: "Get by date", field: "date" },
    { title: "Location", field: "location" }
  ];
  return (
    <ListContainer>
      <ItemList
        columns={columns}
        data={itemsData}
        title='MainList'
        showDetails={(rowData) => {
          ModalFunctions.setIsModalOpen(true);
          ModalFunctions.setItemData(rowData);
        }}
      />
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding-bottom: 48px;
`;

export default Items;
