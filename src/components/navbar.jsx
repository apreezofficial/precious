import React from 'react';
import MusicPlayer from './MusicPlayer'; // Ensure correct path
import './style.css';

function Alink({ text, link }) {
  return <a href={link}>{text}</a>;
}

export default function Navbar() {
  return (
    <>
      <MusicPlayer />
      <div className="navbar">
        <div className="logotext">Precious! ⚡</div>
        <a href="https://github.com/apreezofficial" className="git" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </>
  );
}
