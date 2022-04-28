import React from 'react';
import './App.css';
import Login from './pages/Login';
import AddClient from './pages/AddClient';

function App() {
  return (
    <>
      <Login/>
      <div className="d-flex">
        <div className="col-3 bg-secondary"></div>
        <div className="col-9">
          <AddClient/>
        </div>
      </div>
    </>
  );
}

export default App;
