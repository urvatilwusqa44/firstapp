import React from "react";
const Nav=()=>{
    return(<nav>
        <h1 
        style={{
          color:"red",
          fontSize:"40px",
          padding:"10px",
          border:"1px solid black"}}
        >Urva til wusqa </h1>
        <ul>
          <li>
          <a href="#">Home</a>
          </li>
          <li>
          <a href="#">About</a>
          </li>
          <li>
          <a href="#">Education</a>
          </li>
          <li>
          <a href="#">Skills</a>
          </li>
          <li>
          <a href="#">Contact Me</a>
          </li>
        </ul>
        </nav>);
};
export default Nav;