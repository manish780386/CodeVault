import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LEFT SECTION */}
        <div className="footer-about">
          <h2>CodeVault</h2>
          <p>
            CodeVault is a developer hub where you can explore libraries of all
            programming languages, get installation commands, and access official
            download links — all in one place.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Languages</Link></li> {/* Languages page agar alag hai to uska route */}
            <li><Link to="/">Libraries</Link></li> {/* Libraries page route */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/query">Support</Link></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@codevault.dev</p>
          <p>Help & Query: Available 24/7</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CodeVault — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
