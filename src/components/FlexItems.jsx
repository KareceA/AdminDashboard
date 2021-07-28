import React from "react";
import {FlexItemsData} from "./FlexItemsData";
import "../css/FlexItems.css";

function FlexItems(params) {
    return(
        <div className= "flexitems">
            <ul className="FlexItemsList">
            {FlexItemsData.map((val, key)=>{
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
export default FlexItems;