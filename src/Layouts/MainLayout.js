import React from "react";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import styled from "styled-components";

function MainLayout({ children }) {
  return (
    <MainContainer>
      <SideNav />
      <Container>
        <Header />
        {children}
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  color: #444444;
  font-family: sans-serif;
  height: 90vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 24px;
  width: 80%;
  border-left: 2px solid black;
`;

export default MainLayout;
