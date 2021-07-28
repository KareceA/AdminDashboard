import React from "react";
import '../App.css';
import {SideBarData} from "./SideBarData";
import Profile from "./Profile";

function SideBar() {
    return(
        <div className= "sidebar">
            <Profile />
            <ul className="SideBarList">
            {SideBarData.map((val, key)=>{
                return(
                    <li className="row" key={key}
                        id = {window.location.pathname === val.link ? "active" : "null"} 
                        onClick={()=>
                        {window.location.pathname = val.link}}> {""}
                        <div id= "icon">{val.icon}</div> {""}
                        <div id= "title">{val.title}</div>  {""}
                    </li>
                );
                })}
            </ul>
        </div>
    );   
}

export default SideBar;
