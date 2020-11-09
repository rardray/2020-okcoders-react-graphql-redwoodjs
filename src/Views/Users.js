import React from "react";
import RowContainer from "../Components/RowContainer";
import styled from "styled-components";
import { usersData } from "../dataSource";
function Users() {
  return (
    <SmallPadding>
      {usersData.map((user) => (
        <SmallPadding key={user.name}>
          <RowContainer rowData={user} />
        </SmallPadding>
      ))}
    </SmallPadding>
  );
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`;
export default Users;
