import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About CodeVault</h1>

      <p className="about-description">
        CodeVault is a developer hub where you can explore libraries of all
        programming languages, get installation commands, and access official
        download links — all in one place. Our mission is to simplify the process
        of finding, installing, and using programming libraries for developers
        around the world.
      </p>

      <div className="about-features">
        <h2>Features:</h2>
        <ul>
          <li>All programming languages in one place</li>
          <li>Library download links</li>
          <li>CMD / Terminal install commands</li>
          <li>Search libraries quickly</li>
          <li>Responsive and modern UI</li>
        </ul>
      </div>

      <div className="about-team">
        <h2>Developer:</h2>
        <p>Manish Dange — Full Stack Developer & Creator of CodeVault</p>
        <p>Email: support@codevault.dev</p>
      </div>
    </div>
  )
}
