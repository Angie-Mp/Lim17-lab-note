import { React,useState } from "react";
import Header from "../Header/Header.js";

import "./Style.css"

const Home =() => {
 
  return (
    <div>
      <Header/>

      <div className="menu">
        <ul className="box">
          <p>hola</p>
        </ul>
      </div>

      <div>
        <p>hola dos</p>
      </div>
    </div>
  );
}
export default Home;

/*
<div className="menu">
        <ul>
          <p>hola</p>
        </ul>
      </div>

      <div>
        <p>hola dos</p>
      </div>
*/