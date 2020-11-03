import React from "react";
import Header from "../Compenents/Header";
import SideNav from "../Components/SideNav";

function MainLayout({ children }) {
  return (
    <main>
      <div>
        <SideNav />
      </div>
      <div>
        <Header />
      </div>
      <div>view goes here</div>
    </main>
  );
}

export default MainLayout;
