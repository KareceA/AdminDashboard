import React from "react";
import user from "../user.png";

function Profile() {
    return(
        <div className= "profile">
            <img src= {user} alt= "user" className= "image"/>
            <p id="name">Administration</p>
        </div>
    )
}

export default Profile;