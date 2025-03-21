import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="logotext">Precious! ⚡</div>
        <a href="https://github.com/apreezofficial" className="git" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </nav>
    </React.Fragment>
  );
}
