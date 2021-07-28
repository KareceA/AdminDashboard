import React from "react";
import '../App.css';

function NavBar(params) {
    return(
       <nav className= "navbar">
           <button className= "button"><i className="fas fa-bars"></i></button>
           <input type="text" className="input" placeholder="Search for something..."/>
           <div className="space"></div>
           <div className="rightside"> 
           <p id="ptag">Welcome to the Navigation</p>
           <i id="envelopeicon" class="fas fa-envelope"></i>
           <i id="bellicon" class="fas fa-bell"></i>
           <i id ="logouticon" class="fas fa-sign-out-alt"></i>
           <p className="logout">Logout</p>
           </div>  
       </nav>
    )    
}

export default NavBar; 