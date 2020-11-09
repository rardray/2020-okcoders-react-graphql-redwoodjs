import React from "react";
import styled from "styled-components";

function RowContainer({ rowData }) {
  return (
    <Container>
      <p>Name: {rowData.name}</p>
      <p>Date: {rowData.date}</p>
      <p>Description: {rowData.description}</p>
    </Container>
  );
}

const Container = styled.div`
  border-top: 1px solid grey;
`;

export default RowContainer;
