import React from "react";
import bulb from "./../img/bulb.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={bulb} alt="lightbulb" width="200"/>
    </React.Fragment>
  );
}

export default Header;