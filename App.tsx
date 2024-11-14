import React from "react";
import "./app.scss";
import { Outlet } from "react-router-dom";
import SideBarMenu from "./components/SideBarMenu/SideBarMenu";
import Header from "./components/Header/Header";
import RightSideBarSection from "./components/RightSideBarSection/RightSideBarSection";

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <SideBarMenu />
        <Outlet></Outlet>
        <RightSideBarSection />
      </div>
    </>
  );
};
export default App;
