import React from "react";

function QuickView({ itemData, onClose }) {
  return (
    <div>
      <button onClick={onClose}>x</button>
      <p>Name: {itemData.name}</p>
      <p>Amount: {itemData.amount}</p>
      <p>Get By: {itemData.getBy}</p>
      <p>Location:</p>
      <p>Description:</p>
    </div>
  );
}

export default QuickView;
