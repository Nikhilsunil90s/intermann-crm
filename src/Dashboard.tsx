import React from "react";
import "./CSS/Dashboard.css"
function Dashboard(){
    return(<>
    <div className="container-fluid">
        <div className="row">
        <div className="col-5 card-tops">
        <div className="card " >
  <div className="card-body">
    <h5 className="card-title">Stats Candidats</h5>
   </div>
   
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
    <span className="px-2"> 
              <img src={require("./images/Icon.svg").default} />
              </span>En sommeil / To do<span>12</span></li>
    <li className="list-group-item">
    <span className="px-2"> 
              <img src={require("./images/Icon1.svg").default} />
              </span>Embauché / Work with us<span>8</span></li>
    <li className="list-group-item">
    <span className="px-2"> 
              <img src={require("./images/multiply.svg").default} />
              </span>Archivé / Archived<span>32</span></li>

  </ul>


</div>
                </div><div className="col-5 card-top">
                <div className="card " >
  <div className="card-body">
    <h5 className="card-title">Stats Leads / Contrats</h5>
   </div>
   
  <ul className="list-group list-group-flush">
    <li className="list-group-item">   <span className="px-2"> 
              <img src={require("./images/Icon.svg").default} />
              </span>To Do / Non traité / Attente<span>12</span></li>
    <li className="list-group-item">   <span className="px-2"> 
              <img src={require("./images/Icon1.svg").default} />
              </span>Recherche en cours / In Progress<span>8</span></li>
    <li className="list-group-item">   <span className="px-2"> 
              <img src={require("./images/Icon2.svg").default} />
              </span>Contrat en cours / Done<span>32</span></li>
    <li className="list-group-item">   <span className="px-2"> 
              <img src={require("./images/multiply.svg").default} />
              </span>Annulé / Archivé / Canceled<span>10</span></li>


  </ul>


</div>        </div>
    </div>
    </div>
    
    </>)
}
export default Dashboard;