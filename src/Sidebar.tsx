import React, { useEffect } from "react";
import './CSS/Sidebar.css'
import Dashboard from "./Dashboard";
import Header from "./Header";
function Sidebar() {
    
  return (
    <> 
      <div className="container-fluid">
        <div className="row " style={{height:"100vh"}}>
          <div className="col-lg-3 col-md-3 col-xs-3 pd-gutter"  style={{height:"100vh"}}>
            <div
              className="d-flex flex-column flex-shrink-0 p-3 "
           
            >
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              ><span> 
              <img src={require("./images/logo.svg").default} />
              </span>
              <img src={require("./images/LogoName.svg").default} />
              </a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto text-class">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="page">
                  <span className="px-2"> 
              <img src={require("./images/Shape.svg").default} />
              </span>
                    Résumé
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                  <span className="px-2"> 
              <img src={require("./images/Combine.svg").default} />
              </span>
                    Leads  / clients
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                  
                    To do / non traité / attente
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                 
                    En cours de recherche
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                    Terminé / Contrat en cours
                  </a>
                </li> <li>
                  <a href="#" className="nav-link link-dark">Annulé / Archivé 
                  </a>
                </li> <li>
                  <a href="#" className="nav-link link-dark">
                  <span className="px-2"> 
              <img src={require("./images/Combine.svg").default} />
              </span>
                    Candidats / employés
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                    En sommeil
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">Embauché
                  </a>
                </li> <li>
                  <a href="#" className="nav-link link-dark">
                    Archivé
                  </a>
                </li>
              </ul>
             </div>   
          </div>
          <div className="col-lg-9 col-md-9 col-xs-9">
              <Header />
              <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
