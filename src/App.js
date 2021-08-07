import React from "react";
import './App.css';
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar"
import NavBar2 from "./components/NavBar2";
import AdminResponse from "./components/AdminResponse";
import FlexItems from "./components/FlexItems";
import FlexItems2 from "./components/FlexItems2"

function App() {
  return (
    <div className= "maincontainer"> 
      <div className="App"> <SideBar /> </div>   
      <div className = "mainbody"> 
          <NavBar />
        <div className="navbar2">
        < NavBar2 />
        </div>
        <div className="adminresponse">
          <AdminResponse />
        </div>
        <div className= "flexitems">
          <FlexItems />
        </div>
        <div>
          <FlexItems2 />
        </div>
      </div>
    </div>
  );
}

export default App;
