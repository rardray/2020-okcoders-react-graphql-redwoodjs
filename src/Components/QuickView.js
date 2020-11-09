import React from "react";
import styled from "styled-components";

function QuickView({ itemData, onClose }) {
  return (
    <Modal>
      <Details>
        <button onClick={onClose}>x</button>
        <p>Name: {itemData.name}</p>
        <p>Amount: {itemData.amount}</p>
        <p>Get By: {itemData.date}</p>
        <p>Location: {itemData.location} </p>
        <p>Description: {itemData.description}</p>
      </Details>
    </Modal>
  );
}

const Details = styled.div`
  background-color: lightblue;
  font-size: 18px;
  left: 250px;
  margin: 0 auto;
  padding 24px;
  position: absolute;
  top: 250px;
  width: 30%;
  `;

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.85);
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export default QuickView;
