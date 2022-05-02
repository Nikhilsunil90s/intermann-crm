import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Embauch from "./Embauch";
import CanEmpl from "./CanEmpl";
import Dashboard from "./Dashboard";
import Candidate from './Candidatefile'
import AddEmployes from './AddEmployes'
import AddClient from "./AddClient";
import Canceled from './Canceled'
import Login from './pages/Login'

function App() {
  return (
    <Router>
    <Routes>
    <Route path={"/"} element={ <Sidebar> <Dashboard /> </Sidebar>}/>
    <Route path={"/login"} element={ <Sidebar> <Login /> </Sidebar>}/>
    <Route path={"/embauch"} element={ <Sidebar> <Embauch /> </Sidebar>}/>
    <Route path={"/candidate"} element={ <Sidebar> <CanEmpl /></Sidebar>}/>
    <Route path={"/addCanidates"} element={ <Sidebar> <AddEmployes /></Sidebar>}/>
    <Route path={"/addCustomer"} element={ <Sidebar> <AddClient /></Sidebar>}/>
    <Route path={"/archive"} element={ <Sidebar> <Canceled /></Sidebar>}/>

     </Routes>
      </Router>
  );
}

export default App;
