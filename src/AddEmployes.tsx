import React, { useState,useEffect } from "react";
import "./CSS/Employes.css";

export default function Employes() {
  const [data, setData] = useState(fakeDataFormat);
  const onFormDataChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };
  useEffect(()=>{
  
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
})

  return (
    <div className="p-2">
      <div className="text-center py-3">
        <span className="hero-title">
          <h3>ADD A CANDIDATES / EMPLOYES</h3>
        </span>
      </div>
      <div>
        <form className="add-form form" onSubmit={onFormSubmit}>
          <div className="d-flex flex-wrap justify-content-around">
            <div className="col-md-6">
              <div className="p-2">
                <label>Candidat name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Company Name"
                  name="companyName"
                  required
                  value={data.companyName}
                  onChange={onFormDataChange}
                />
                <span className="text-small">
                  Mendatory, please add company client
                </span>
              </div>
              <div className="p-2">
                <label>Candidats Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number (+format)"
                  name="companyNumber"
                  required
                  value={data.companyNumber}
                  onChange={onFormDataChange}
                />
                <span className="text-small">
                  NOT Mendatory, please add phone client with +() . exemple :
                  +33623167260
                </span>
              </div>
              <div className="p-2">
                <label>Secteur d’activité</label>
                <select
                  name="sector"
                  className="form-select"
                  required
                  value={data.sector}
                  onChange={onFormDataChange}
                >
                  <option value="Logisitque">Logisitque</option>
                </select>
                <span className="text-small">
                  Please select the sector of this client, you can add sector on
                  the BO.
                </span>
              </div>
              <div className="p-2">
                <label>Facebook profile</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Facebook link"
                  name="companyContactName"
                  value={data.companyContactName}
                  onChange={onFormDataChange}
                />
                <span className="text-small">
                  
                  NOT Mendatory, please add contact person on this company.
                </span>
              </div>
              <div className="p-2">
                <label>
                  Skills / Notes Compétances (will be displayed on CV)
                </label>
                <textarea
                  className="form-control"
                  placeholder="Note"
                  name="skills"
                  rows={4}
                  value={data.skills}
                  onChange={onFormDataChange}
                ></textarea>
                <span className="text-small">
                  
                  NOT mendatory, please add some special skills that the
                  customer ask for this reasearch.
                </span>
              </div>
              <div className="p-2">
                <label>
                  Motivation de ce client à travailler avec nous(bigger number
                  is more important)
                </label>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <input
                      type="radio"
                      name="immediateClient"
                      value={1}
                      onChange={onFormDataChange}
                    />
                    1
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="immediateClient"
                      value={2}
                      onChange={onFormDataChange}
                    />
                    2
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="immediateClient"
                      value={3}
                      onChange={onFormDataChange}
                    />
                    3
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="immediateClient"
                      value={4}
                      onChange={onFormDataChange}
                    />
                    4
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="immediateClient"
                      value={5}
                      onChange={onFormDataChange}
                    />
                    5
                  </li>
                </ul>
                <span className="text-small">
                  
                  If we find the candidates, does he take it immediately? Or
                  will he still need to think?
                </span>
              </div>
              <div className="p-2 d-flex">
                <div className="col-6">
                  <p>Permis / Licence drive</p>
                  <div>
                    
                    <input type="radio" />
                    <span>Yes (B)</span>
                  </div>
                  <div>
                    
                    <input type="radio" />
                    <span>No</span>
                  </div>
                </div>
                <div className="col-6">
                  <p>Voyage en voiture vers France ?</p>
                  <div>
                    
                    <input type="radio" />
                    <span>Yes</span>
                  </div>
                  <div>
                    
                    <input type="radio" />
                    <span>No</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-2">
                <label>Candidate Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Client Name"
                  name="clientEmail"
                  value={data.clientEmail}
                  onChange={onFormDataChange}
                />
                <span className="text-small">
                  
                  Mandatory, please add client email
                </span>
              </div>

              <div className="p-2">
                <label>Candidate Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter client adress (address, zip, city, country)"
                  name="companyAddress"
                  value={data.companyAddress}
                  onChange={onFormDataChange}
                />
                <span className="text-small">
                  
                  Mandatory, Enter client adress (address, zip, city, country)
                </span>
              </div>

              <div className="p-2">
                <label>Métier / Job</label>
                <select
                  name="job"
                  className="form-select"
                  value={data.job}
                  onChange={onFormDataChange}
                >
                  <option value="Préparateur de commande">
                    Préparateur de commande
                  </option>
                </select>
                <span className="text-small">
                  
                  Please select the job of this client, you can add job on the
                  BO.
                </span>
              </div>

              <div className="p-2">
                <label>Other phone number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number (+format)"
                  name="companyContactNumber"
                  value={data.companyContactNumber}
                  onChange={onFormDataChange}
                />
                <span className="text-small">
                  
                  NOT Mendatory, please add phone number of our contact in this
                  company if there is one, if not we will use company number.
                </span>
              </div>

              <div className="p-2">
                <label>Candidats Age </label>
                <input
                  type="number"
                  className="form-control"
                  name="postCount"
                  placeholder="42"
                />
                <span className="text-small">NOT Mendatory, NUMBER ONLY</span>
              </div>
              <div className="p-2">
                <p className="padding-bottom">Langues du candidat</p>

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

              <div className="p-2">
                <div className="card card-body">
                  <label className="fw-bold">
                    Quand ce candidat a besoin de travailler When this candidate
                    is ready to work with us
                  </label>
                  <br />
                  <label className="fw-bold">From date / A PARTIR DE </label>
                  <input
                    type="date"
                    className="form-control"
                    name="fromDate"
                    value={data.fromDate}
                    onChange={onFormDataChange}
                  />
                  <br />
                  <label className="fw-bold">UNTIL DATE / Jusqu’à </label>
                  <input
                    type="date"
                    className="form-control"
                    name="toDate"
                    value={data.toDate}
                    onChange={onFormDataChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <p>
                Expérience du candidat (fill only lines, higher = more recent)
              </p>
              <table className="table table-bordered">
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
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="p-2">
                <label>
                  Total années d’expérience / Total experiance in years of this
                  candidate
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="postCount"
                  placeholder="33"
                />
                <span className="text-small">NOT Mendatory, NUMBER ONLY</span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2">
                <p className="padding-bottom">
                  Fetes/date pour lequel il veux  impérativement rentrer
                </p>

                <div>
                  <input type="checkbox" />
                  <span className="ps-2">Easter</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span className="ps-2">Noel</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span className="ps-2">Summer</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span className="ps-2">Autre / Other</span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <label>
                Ce candidat a été rentré par : / This customer was entered by
              </label>
              <input
                type="text"
                name="enteredBy"
                placeholder="Contact"
                className="form-control"
                value={data.enteredBy}
                onChange={onFormDataChange}
              />
              <span className="text-small">
                Exemple : Jeremy Roggy; Patrick Bueno; TDR. Who entred this
                customer on the database
              </span>
            </div>
            <div className="col-md-12 col-12 py-4">
              <div className="submit-btn-hold p-1 mx-auto d-flex">
                <button className="btn btn-dark" type="submit">
                  Ajouter ce candidat / Add this candidate
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const fakeDataFormat = {
  companyName: "",
  companyNumber: "",
  clientEmail: "",
  companyAddress: "",
  sector: "",
  companyContactName: "",
  companyContactNumber: "",
  skills: "",
  immediateClient: "",
  turnover: 0,
  salary: 0,
  job: "",
  postCount: 1,
  fromDate: "",
  toDate: "",
  importanceClient: "",
  enteredBy: "",
};
