import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Home, Info, MessageSquare, ArrowLeft, Menu, X, Code2 } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ onSearchChange }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={17} /> },
    { to: "/about", label: "About", icon: <Info size={17} /> },
    { to: "/query", label: "Query", icon: <MessageSquare size={17} /> },
  ];

  return (
    <header className="cv-navbar">
      <div className="cv-navbar__inner">

        {/* ── LEFT ── */}
        <div className="cv-navbar__left">
          <button
            className="cv-btn cv-btn--ghost cv-btn--icon"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            title="Go back"
          >
            <ArrowLeft size={20} />
          </button>

          <Link to="/" className="cv-navbar__brand">
            <div className="cv-navbar__logo-wrap">
              <Code2 size={22} className="cv-navbar__logo-icon" />
            </div>
            <span className="cv-navbar__brand-text">
              Code<span className="cv-navbar__brand-accent">Vault</span>
            </span>
          </Link>
        </div>

        {/* ── SEARCH ── */}
        <div className="cv-navbar__search">
          <div className="cv-search-box">
            <Search size={16} className="cv-search-box__icon" />
            <input
              type="text"
              placeholder="Search language or library..."
              value={searchVal}
              onChange={handleSearch}
              className="cv-search-box__input"
            />
            {searchVal && (
              <button
                className="cv-search-box__clear"
                onClick={() => { setSearchVal(""); if (onSearchChange) onSearchChange(""); }}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ── RIGHT NAV ── */}
        <nav className="cv-navbar__nav">
          <ul className="cv-nav-links">
            {navLinks.map(({ to, label, icon }) => (
              <li key={to}>
                <Link to={to} className="cv-nav-link">
                  {icon}
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── HAMBURGER ── */}
        <button
          className="cv-btn cv-btn--ghost cv-btn--icon cv-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className={`cv-mobile-menu ${menuOpen ? "cv-mobile-menu--open" : ""}`}>
        {/* Mobile search */}
        <div className="cv-mobile-menu__search">
          <div className="cv-search-box">
            <Search size={16} className="cv-search-box__icon" />
            <input
              type="text"
              placeholder="Search language or library..."
              value={searchVal}
              onChange={handleSearch}
              className="cv-search-box__input"
            />
          </div>
        </div>

        {/* Mobile links */}
        <ul className="cv-mobile-links">
          {navLinks.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to}
                className="cv-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}