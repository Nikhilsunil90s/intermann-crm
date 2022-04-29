import React from "react";
import "./css/Embauch.css";
function Embauch() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 text-center">
            <img src={require("./images/embauché.svg").default} style={{width:"70%",paddingTop:"30px"}}/>
            <p className="text-family">
            Ici vous avez la liste des candidats qui travaillant 
              <span> déjà chez nous, il sont donc lier à un contrat dans la liste lead</span>
            </p>
            <p className="child-text">
            Vous devez toujours vous assurer d’avoir un maximum d’information sur chaque personne, y compris son rib, ses coordonnées etc...
            </p>
            <p>
            Here you have the list of candidates who are already working with us, so they are linked to a contract in the lead list,ensure that you have as much information as possible about each person 
            </p>
          </div>
          <div className="col-6">
            <p>Filtre Secteur d’activité</p>
            <div className="dropdown">
              <div aria-labelledby="dropdownMenuButton1">
                <select style={{ width: "320px", height: "30px" }}>
                  <option>
                    <a className="dropdown-item" href="#">
                      BTP
                    </a>
                  </option>
                  <option>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </option>
                  <option>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </option>
                </select>
              </div>
            </div>
            <p className="last-child">Filtre Langues du candidat</p>
            <div>
              <div>
                <input type="checkbox" />
                <span className="ps-2">Roumain</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="ps-2">Français</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="ps-2">Anglais</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="ps-2">Italien</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="ps-2">Russe</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="ps-2">Espagnol</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="ps-2">Autre</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>Filtre selection métier / job</p>
            <div className="box">
              <p>Métier a</p>
              <p>Métier b</p>
              <p>Métier c</p>
              <p>Métier d</p>
              <p>Métier e</p>
            </div>
          </div>
          <hr className="new5" />
        <div className="col-3 pd-left">
          <div className="card card-color">
            <div className="card-upper">
              <div className="col-4">
                <img
                  src={require("./images/card-men.svg").default}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-7 ">
                <p>Candidats_name</p>
                <p>Candidats_Age</p>
                <p>Motivation:</p>
                <div className="embauch">EMBAUCHé</div>
              </div>
            </div>

            <div className="card-body">
              <p>Candidats_name</p>
              <p>Candidats_age: years old</p>
              <p>Secteur : Candidats_Sector</p>
              <p>Job : Candidats_Sector </p>
              <p>Langues : Candidats_langues_List </p>
              <p>Phone Number : Candidats_Phone </p>
              <p>Facebook link : Candidats_Facebook </p>
              <p>Email : Candidats_Email </p>
              <p className="blue">Ready for work : From date To date </p>
              <small className="permise">
                <span>
                  <input type="checkbox" />
                </span>
                Permise.b
              </small>
              <div className="box-gray">
                  <p>WORK AT <small>: client_Name</small></p>
                  <p>Since <small>: date</small></p>
                  <p>Salary <small>: price €</small></p>
              </div>
              <a href="#" className="btn btn-card">
                See Full profile
              </a>
              <a href="#" className="btn btn-cardRight1">
                Edit Profile
              </a>
              <a href="#" className="btn btn-cardLeft">
                
                Move to in Progress
              </a>
              <a href="#" className="btn btn-cardRight">
                Archive
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 pd-left">

        <div className="card card-color">
            <div className="card-upper">
              <div className="col-4">
                <img
                  src={require("./images/card-men.svg").default}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-7 ">
                <p>Candidats_name</p>
                <p>Candidats_Age</p>
                <p>Motivation:</p>
                <div className="embauch">EMBAUCHé</div>

              </div>
            </div>

            <div className="card-body">
              <p>Candidats_name</p>
              <p>Candidats_age: years old</p>
              <p>Secteur : Candidats_Sector</p>
              <p>Job : Candidats_Sector </p>
              <p>Langues : Candidats_langues_List </p>
              <p>Phone Number : Candidats_Phone </p>
              <p>Facebook link : Candidats_Facebook </p>
              <p>Email : Candidats_Email </p>
              <p className="blue">Ready for work : From date To date </p>
              <small className="permise">
                <span>
                  <input type="checkbox" />
                </span>
                Permise.b
              </small>
              <div className="box-gray">
                  <p>WORK AT <small>: client_Name</small></p>
                  <p>Since <small>: date</small></p>
                  <p>Salary <small>: price €</small></p>
              </div>
              <a href="#" className="btn btn-card">
                See Full profile
              </a>
              <a href="#" className="btn btn-cardRight1">
                Edit Profile
              </a>
              <a href="#" className="btn btn-cardLeft">
                
                Move to in Progress
              </a>
              <a href="#" className="btn btn-cardRight">
                Archive
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 pd-left">

              <div className="card card-color">
            <div className="card-upper">
              <div className="col-4">
                <img
                  src={require("./images/card-men.svg").default}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-7 ">
                <p>Candidats_name</p>
                <p>Candidats_Age</p>
                <p>Motivation:</p>
                <div className="embauch">EMBAUCHé</div>

              </div>
            </div>

            <div className="card-body">
              <p>Candidats_name</p>
              <p>Candidats_age: years old</p>
              <p>Secteur : Candidats_Sector</p>
              <p>Job : Candidats_Sector </p>
              <p>Langues : Candidats_langues_List </p>
              <p>Phone Number : Candidats_Phone </p>
              <p>Facebook link : Candidats_Facebook </p>
              <p>Email : Candidats_Email </p>
              <p className="blue">Ready for work : From date To date </p>
              <small className="permise">
                <span>
                  <input type="checkbox" />
                </span>
                Permise.b
              </small>
              <div className="box-gray">
                  <p>WORK AT <small>: client_Name</small></p>
                  <p>Since <small>: date</small></p>
                  <p>Salary <small>: price €</small></p>
              </div>
              <a href="#" className="btn btn-card">
                See Full profile
              </a>
              <a href="#" className="btn btn-cardRight1">
                Edit Profile
              </a>
              <a href="#" className="btn btn-cardLeft">
                
                Move to in Progress
              </a>
              <a href="#" className="btn btn-cardRight">
                Archive
              </a>
            </div>
            </div>
        </div>
        <div className="col-3 pd-left">

        <div className="card card-color">
            <div className="card-upper">
              <div className="col-4">
                <img
                  src={require("./images/card-men.svg").default}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-7 ">
                <p>Candidats_name</p>
                <p>Candidats_Age</p>
                <p>Motivation:</p>
                <div className="embauch">EMBAUCHé</div>

              </div>
            </div>

            <div className="card-body">
              <p>Candidats_name</p>
              <p>Candidats_age: years old</p>
              <p>Secteur : Candidats_Sector</p>
              <p>Job : Candidats_Sector </p>
              <p>Langues : Candidats_langues_List </p>
              <p>Phone Number : Candidats_Phone </p>
              <p>Facebook link : Candidats_Facebook </p>
              <p>Email : Candidats_Email </p>
              <p className="blue">Ready for work : From date To date </p>
              <small className="permise">
                <span>
                  <input type="checkbox" />
                </span>
                Permise.b
              </small>
              <div className="box-gray">
                  <p>WORK AT <small>: client_Name</small></p>
                  <p>Since <small>: date</small></p>
                  <p>Salary <small>: price €</small></p>
              </div>
              <a href="#" className="btn btn-card">
                See Full profile
              </a>
              <a href="#" className="btn btn-cardRight1">
                Edit Profile
              </a>
              <a href="#" className="btn btn-cardLeft">
                
                Move to in Progress
              </a>
              <a href="#" className="btn btn-cardRight">
                Archive
              </a>
            </div>
            </div>
        </div>
     
        </div>
      </div>
    </>
  );
}
export default Embauch;
