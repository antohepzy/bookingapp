import React from 'react';
import "../css/app.css";


const NavBar = ({newLogo}) => {
    return(
        <div className="navArea">
            <img src = { require("../images/logo.png")  }  />
            <div className = "contact">
                <h1 className={!newLogo ? "white" : null}> <img src="" /> Bookit </h1>
            </div>
        </div>
    )
}
export default NavBar;