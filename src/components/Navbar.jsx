import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/images/logo.png';
import { Search, Home, ArrowLeft } from 'lucide-react';

export default function Navbar({ onSearchChange }) {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      
      {/* Left Section (Back + Logo + Name) */}
      <div className="navbar-left">
        
        {/* BACK BUTTON */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={22}/>
        </button>

        <img src={logo} alt="CodeVault Logo" className="logo" />
        <h2 className="logo-text">
          <Link to="/">CodeVault</Link>
        </h2>
      </div>

      {/* SEARCH BOX */}
      <div className="nav-search">
        <input 
          type="text" 
          placeholder="Search library..." 
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button><Search size={20}/></button>
      </div>       

      {/* NAVIGATION LINKS */}
      <ul className="nav-links">
        <li><Link to="/"><Home className="nav-icon"/> Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/query">Query</Link></li>
      </ul>

    </header>
  );
}
