import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './Pages/Home';
import UserHome from './Pages/User/UserHome';
import ServiceSearch from './Pages/ServiceSearch'; 
import AddService from './Pages/Provider/AddService';
import Pets from './Pages/User/Pets';
import AddPet from './Pages/User/AddPet';
import Settings from './Pages/Settings'; 
import AboutMe from './Pages/AboutMe';
import Profile from './Pages/Profile';
import Skills from './Pages/Skills';
import './App.css';
import './Layout';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout/>}> 
          <Route path="/" element={<Home />} /> {/* Route for Home page/Home */}
            <Route path="/UserHome" element={<UserHome />} /> {/* Route for UserHome */}
            <Route path="/ServiceSearch" element={<ServiceSearch />} /> {/* Route for ServiceSearch */}
            <Route path="/AddService" element={<AddService />} /> {/* Route for AddService */}
            <Route path="/AddPet" element={<AddPet />} /> {/* Route for AddPet */}
            <Route path="/Settings" element={<Settings />} /> {/* Route for Provider Settings */}
            <Route path="/AboutMe" element={<AboutMe />} /> {/* Route for AddService */}
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Pets" element={<Pets />} /> {/* Route for Pets */}
            <Route path="/Skills" element={<Skills />} /> {/* Route for Skills */}
          </Route>
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <footer>© Nightmare Panthera 2024</footer>
    </div>
  );
};

export default App;