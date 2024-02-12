import logo from './logo.svg';
import React, {useState } from 'react';
 
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from './pages/About';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { LoginModal } from './components/Login';
import {useAuth} from './context/AuthContext';
const App = () => {
  const {isLoggedIn}  = useAuth();

  // State to manage modal visibility

  // const onClose = () => {
  //   setIsLoginOpen(false); // Close the modal
  // };


  return (

    <div className="App">
    <LoginModal />
    <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">JATA Fashion</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
          <div className="input-group mx-3">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append mx-3">
              <button className="btn btn-outline-light" type="submit">Search</button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto"> {/* Use ms-auto for margin-left:auto to push to the right */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? <Link className="nav-link" to="/login">Profile</Link> :
              <Link className="nav-link" to="/login">Login</Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
);
}

export default App;
