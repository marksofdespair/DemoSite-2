import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import UserHome from './Pages/User/UserHome';
import ServiceSearch from './Pages/ServiceSearch'; 
import AddService from './Pages/Provider/AddService';
import Settings from './Pages/Provider/Settings';
import AboutUs from './Pages/AboutUs';
import CreateAccount from './Pages/CreateAccount';
import ProviderProfile from './Pages/Provider/ProviderProfile';
import UserProfile from './Pages/User/UserProfile';
import './App.css';
import './Layout';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout/>}> 
            <Route path="/" element={<Home />} /> {/* Route for Home page/Home */}
            <Route path="/Login" element={<Login />} /> {/* Route for Login */}
            <Route path="/UserHome" element={<UserHome />} /> {/* Route for UserHome */}
            <Route path="/ServiceSearch" element={<ServiceSearch />} /> {/* Route for ServiceSearch */}
            <Route path="/AddService" element={<AddService />} /> {/* Route for AddService */}
            <Route path="/Settings" element={<Settings />} /> {/* Route for Settings */}
            <Route path="/AboutUs" element={<AboutUs />} /> {/* Route for AddService */}
            <Route path="/CreateAccount" element={<CreateAccount />} /> {/* Route for CreateAccount */}
            <Route path="/ProviderProfile" element={<ProviderProfile />} /> {/* Rout for ProviderProfile */}
            <Route path="/UserProfile" element={<UserProfile />} /> {/* Rout for UserProfile */}
          </Route>
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <footer>© Team Laika Capstone Project 2024</footer>
    </div>
  );
};

export default App;
