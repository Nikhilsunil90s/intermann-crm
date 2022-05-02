import React from "react";
import { Link } from "react-router-dom";
import './CSS/Sidebar.css'
import Header from "./Header";

function Sidebar(props:any) {
    
  return (
    <> 
      <div className="container-fluid">
        <div className="row bg-side" style={{height:"100vh"}}>
          <div className="col-lg-3 col-md-3 col-xs-3 pd-gutter"  style={{height:"100vh"}}>
            <div
              className="d-flex flex-column flex-shrink-0 pt-3 "
           
            >
              <Link
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              ><span> 
              <img src={require("./images/logo-header.svg").default} />
              </span>
              <img src={require("./images/LogoName.svg").default} />
              </Link>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto text-class">
                <li className="nav-item">
                  <Link to="#" className="nav-link active" aria-current="page">
                  <span className="px-2"> 
              <img src={require("./images/Shape.svg").default} />
              </span>
                    Résumé
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link link-dark">
                  <span className="px-2"> 
              <img src={require("./images/Combine.svg").default} />
              </span>
                    Leads  / clients
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link link-dark">
                  
                    To do / non traité / attente
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link link-dark">
                 
                    En cours de recherche
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link link-dark">
                    Terminé / Contrat en cours
                  </Link>
                </li> <li>
                  <Link to="#" className="nav-link link-dark">Annulé / Archivé 
                  </Link>
                </li> <li>
                  <Link to="/candidate" className="nav-link link-dark">
                  <span className="px-2"> 
              <img src={require("./images/Combine.svg").default} />
              </span>
                    Candidats / employés
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link link-dark">
                    En sommeil
                  </Link>
                </li>
                <li>
                  <Link to="/embauch" className="nav-link link-dark">Embauché
                  </Link>
                </li> <li>
                  <Link to="/archive" className="nav-link link-dark">
                    Archivé
                  </Link>
                </li>
              </ul>
             </div>   
          </div>
          <div className="col-lg-9 col-md-9 col-xs-9">
              <Header />
              {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
