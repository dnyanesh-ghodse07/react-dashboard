import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import Widget from "../../components/Widgets/Widget";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="balance" />
          <Widget type="earnings" />
          <Widget type="order" />
          <Widget type="users" />
        </div>
      </div>
    </div>
  );
};

export default Home;
