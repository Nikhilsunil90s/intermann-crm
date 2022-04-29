import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Embauch from './Embauch';

// const AppRoute = ({element:Component,layout:Layout, ...rest})=>(
//   <Route {...rest} render ={props=>(
//     <Layout><Component {...props}> </Component></Layout>
//   )}></Route>
//   )
function App() {
 
  return (
//         <Router>
//       <Routes>
//  <AppRoute path ="/" layout={Sidebar} element={<Embauch />} />  
//  </Routes>
//  </Router>
    
<>
<Sidebar />
</>
  )
}

export default App;
