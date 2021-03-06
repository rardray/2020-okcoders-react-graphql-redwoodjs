import React from "react";
import RowContainer from "../Components/RowContainer";
import { alertsData } from "../dataSource";
function Alerts() {
  return (
    <div>
      {alertsData.map((alert) => (
        <RowContainer rowData={alert} />
      ))}
    </div>
  );
}

export default Alerts;
