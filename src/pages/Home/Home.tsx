import React from "react";
import SideBar from "../../components/Sidebar/SideBar";
import "./Home.scss";

const Home = () => {
  return <div className="home">
      <SideBar />
      <div className="homeContainer">
        Container
      </div>
  </div>;
};

export default Home;
