import React from "react";
import './CSS/Header.css'
import {Link} from "react-router-dom"
const  Header=()=>{
  
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/addCustomer">  <button className="btn btn-1"> Add customer</button></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/addCanidates"> <button className="btn btn-2">   ADD candidates</button></Link>
        </li>
       
      </ul>
      <span className="navbar-text">
       <ul className="d-flex ul-li"> <li className="nav-item">
       <a className="nav-link" href="https://www.intermann.ro/"  target="_blank">  <button className="btn btn-2">     VOIR LE SITE EN roumain</button></a>
        </li>  <li className="nav-item">
        <a className="nav-link" href="https://www.intermann.fr/" target="_blank">  <button className=" btn btn-1">VOIR LE SITE EN FRANçAIS</button></a>
        </li></ul>
      </span>
    </div>
  </div>
</nav>
</>
    )
}
export default Header;