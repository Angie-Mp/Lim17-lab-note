import { React } from "react";
import { Link } from "react-router-dom";
import "./Style.css"

const Header =() => {
  return (
    <header>
        <ul className="styleUl">  
          <li>
            <p className="styleHeaderTitle">Lab Notes</p>
          </li> 
          <li className="styleLinkBack">
          <Link to="/" className="active">Salir</Link>
          </li>
        </ul>
    </header>
  );
}
export default Header;