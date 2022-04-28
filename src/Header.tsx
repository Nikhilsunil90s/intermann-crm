import React from "react";
import './css/Header.css'
const  Header=()=>{
  
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">   <button className="btn btn-1"> Add customer</button></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#"> <button className="btn btn-2">   ADD candidates</button></a>
        </li>
       
      </ul>
      <span className="navbar-text">
       <ul className="d-flex ul-li"> <li className="nav-item">
       <a className="nav-link" href="#"> <button className="btn btn-2">     VOIR LE SITE EN roumain</button></a>
        </li>  <li className="nav-item">
        <a className="nav-link" href="#">  <button className=" btn btn-1">VOIR LE SITE EN FRANçAIS</button></a>
        </li></ul>
      </span>
    </div>
  </div>
</nav>
</>
    )
}
export default Header;