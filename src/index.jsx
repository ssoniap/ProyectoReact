import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import LogIn from './pages/LogIn';
import Recetario from './pages/Recetario';
import DetalleArroz from './pages/DetalleArroz';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path="/" Component={LogIn}></Route>
    <Route path="/recetario" Component={Recetario}></Route>
    <Route path="/arrozconleche" Component={DetalleArroz}></Route>
  </Routes>

  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
