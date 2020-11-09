import React from "react";
import RowContainer from "../Components/RowContainer";
import styled from "styled-components";

function Activities() {
  return (
    <SmallPadding>
      <RowContainer />
    </SmallPadding>
  );
}
const SmallPadding = styled.div`
  padding-bottom: 24px;
`;

export default Activities;
