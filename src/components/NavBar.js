/**
 * Author: An Ho, Tin Phu
 */
import React from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import { doSignOut } from '../firebase/auth';
  

const NavBar = () => {

const {currentUser} = useAuth();    


const handleSignOut = async () => {
    try {
        await doSignOut(); // Assume your signOut function is provided by useAuth
    } catch (error) {
        console.error('Error signing out:', error);
    }
    };


    
const UserButton = () => {
    const { userLoggedIn } = useAuth();
  
  
    return userLoggedIn ? (
    <>
        <li className="nav-item">
        <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/" onClick={handleSignOut}>Log Out</Link>
        </li>


    </>      
    ) : (
      <Link className="nav-link" id="login-button" to="/login">
        Login
      </Link>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          JATA Fashion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="input-group mx-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append mx-3">
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>            
            <UserButton />              
          
              <li className="navbar-nav ms-auto">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
