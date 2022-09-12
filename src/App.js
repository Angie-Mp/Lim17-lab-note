import React from "react";
import {BrowserRouter,Route,Routes,} from 'react-router-dom';
import Login from './components/EnterApp/Login/Login.js';
import Register from './components/EnterApp/Register/Register.js';
import Home from './components/EnterApp/Home/Home.js'

function App() {
/*  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;



/*
import Welcome from './components/Welcome/index.js';
import Chef from './components/Chef/index.js';
import Index from './components/Mesero/index.js';
import Admin from './components/Administrador/index.js';
import BreakfastOverview from "./components/Mesero/Breakfast/BreakfastOverview.js";
import MenuOverview from "./components/Mesero/Menu/MenuOverview.js";
import {BrowserRouter,Route,Routes,} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/chef" element={<Chef/>}/>
        <Route path="/mesero" element={<Index/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/mesero/breakfast" element={<BreakfastOverview/>} />
        <Route path="/menu" element={<MenuOverview/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




*/