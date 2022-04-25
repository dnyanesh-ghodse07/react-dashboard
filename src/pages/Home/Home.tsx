import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import "./Home.scss";

const Home = () => {
  return <div className="home">
      <SideBar />
      <div className="homeContainer">
      <Navbar />
      </div>
  </div>;
};

export default Home;
