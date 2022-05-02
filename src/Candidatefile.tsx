import React,{useEffect} from "react";
import "./CSS/Candidatefile.css"

function CanFile (){

  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
    return(<>

    <div className="containet-fluid">
        <div className="row">
            <div className="col-12 top-pd text-center">
                <img src={require("./images/Candidatefile.svg").default} style={{width:"70%"}} />
            </div>
            <div className="col-6">
                <div className="stable">
<button type="button" className="btn bg-btn"><img src={require("./images/return.svg").default} />Retrun to do list candidates </button>
                </div>
                </div>
                <div className="col-6  text-end ">
                    <button className="btn btn-bgb" ><img src={require("./images/Edit.svg").default} />Edit Profile</button>
                    </div>
                    <div className="bg-class">
                    <div className="col-12 p-3 bg-color-card">
                        <div className="row">
                        <div className="col-2 text-center ">
<img src={require("./images/menlogos.svg").default}  style={{width:"90%"}}/>

<button type="button" className="btn btn-upload">UPLOAD PHOTO</button>
                        </div>
                        <div className="col-5">
<p>Name : Candidats_name</p>
<p>Age : Candidats_age</p>
<p>Motivation : </p>
 <p>Secteur : Candidats_Sector</p>
 <p>Métier/Job : Candidats_Metier</p>
                        </div>
                        <div className="col-5 text-end end-class">
                            <div >
                            <button type="button" className="btn btn-gray">TO DO</button>

                            </div>
                        <p className="fw-bold">En recherche de contrat</p>
                        <p>This candidate is looking for a job</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-12 box-size" >
                        <div className="row">
                            <div className="col-6 text-center"><p>Mail : Candidat_email</p>
                            <button className="btn btn-email"><span className="padding-email"><img src={require("./images/gmail.svg").default}  /></span>Send Email</button>
                            <p>Facebook : </p>
                            <button className="btn btn-primary btn-see"><span className="padding-email"><img src={require("./images/facebook.svg").default} /></span>See Profile</button>
                            </div>

                            <div className="col-6">
                            <p>Phone : Candidat_Phone</p>
                            <button className="btn btn-whatsapp btn-see"><span className="padding-email"><img src={require("./images/whatsapp.svg").default}  /></span>Send What’s App</button>
                            <p> Phone 2 : Candidat_Phone2 </p>
                            <button className="btn btn-whatsapp btn-see"><span className="padding-email"><img src={require("./images/whatsapp.svg").default} /></span>Send What’s App</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="parent-p">
                    <div className="d-flex">   <p>Langues : </p><span> Candidats_Langues</span></div> 
                  <div className="d-flex blue-text">  <p>Ready for work :</p><span>From date - To date</span>   </div>
               <div className="d-flex">     <p>Permis :</p><span>Boolean_Permis/License_Drive</span></div>
                 <div className="d-flex">   <p>Voyage en voiture :</p> <span>Boolean_Voyage_voiture</span></div>
                 <div className="d-flex">   <p>Skills/note: </p><span> candidate_skills Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                    </div>
                    </div>
                    <div className="col-12 pt-4">
                        <h3 className="exp">Expérience du candidat </h3>
                        <table className="table table-bordered border-dark">
                <thead>
                  <tr>
                    <th scope="col">
                      Période  Exemple Janvier 2020 à Janvier 2021
                    </th>
                    <th scope="col">Lieu de travail  Exemple Paris</th>
                    <th scope="col">
                      Travail effectué  Exemple : Facadier Isolateur
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Text Area</td>
                    <td>Text Area</td>
                    <td>Text Area</td>
                  </tr>
                  <tr>
                    <td>Text Area</td>
                    <td>Text Area</td>
                    <td>Text Area</td>
                  </tr>
                  <tr>
                    <td>Text Area</td>
                    <td>Text Area</td>
                    <td>Text Area</td>
                  </tr>
                  <tr>
                    <td>Text Area</td>
                    <td>Text Area</td>
                    <td>Text Area</td>
                  </tr> <tr>
                    <td>Text Area</td>
                    <td>Text Area</td>
                    <td>Text Area</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex align-center child-p pt-3">     <p>Années d’expériance : </p><span>Candidate_experiance years</span></div>
              <div className="d-flex align-center child-p"><p>Ajouté par/Added by :</p><span> Added_by</span></div>
                  
                <p className="f-text">Note : Who entred this candidates/employe on the database</p>
                </div>
                <div className="col-12">
                    <div className="row">
                <div className="col-3 text-center">
                <button type="button" className="btn btn-move">Move to in Progress</button>
                <p className="italic-font">Si embauché</p>
                </div>
                <div className="col-3 text-center">
                    <button type="button" className="btn btn-red">Archive / Canceleld</button>
                <p className="italic-font">Si embauché</p>

                </div>
                <div className="col-3 text-center">
                    <button type="button" className="btn btn-black"><img src={require("./images/Edit.svg").default} />Edit Profile</button>
                    <p className="italic-font">Editer le profil</p>
                </div>
                </div>
                </div>
        </div>
        </div>
    </div>
    </>)
}
export default CanFile;