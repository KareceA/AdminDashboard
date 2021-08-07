import React from "react";
import {FlexItems2Data} from "./FlexItems2Data";
import "../css/FlexItems2.css";

function FlexItems2(params) {
    return(
        <div className= "flexitems">
            <ul className="FlexItemsList">
            {FlexItems2Data.map((val, key)=>{
                return(
                    <li className="row1" key={key}
                        id = {window.location.pathname === val.link ? "active" : "null"} 
                        onClick={()=>
                        {window.location.pathname = val.link}}> {""}
                        <div id= "icon1">{val.icon}</div> {""}
                        <div id= "title1">{val.title}</div>  {""}
                    </li>
                );
                })}
            </ul>
        </div>
    );   
    
}

export default FlexItems2;