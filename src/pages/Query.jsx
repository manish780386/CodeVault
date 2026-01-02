import React from "react";
import "./Query.css";

export default function Query() {
  return (
    <div className="query-container">
      <h1 className="query-title">Submit Your Query</h1>

      <form className="query-form">

        {/* NAME */}
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        {/* LANGUAGE SELECT */}
        <div className="form-group">
          <label>Select Language</label>
          <select>
            <option value="">Choose Language</option>
            <option>Python</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Java</option>
            <option>C++</option>
            <option>Node.js</option>
            <option>PHP</option>
            <option>Go</option>
          </select>
        </div>

        {/* EXTRA FIELD: ISSUE TYPE */}
        <div className="form-group">
          <label>Issue Type</label>
          <select>
            <option value="">Choose Issue</option>
            <option>Library Not Installing</option>
            <option>CMD Command Error</option>
            <option>Download Link Issue</option>
            <option>Version Mismatch</option>
            <option>Other Issue</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Explain your issue..."></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <button className="query-btn">Submit Query</button>
      </form>
    </div>
  );
}
