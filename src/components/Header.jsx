import React from 'react'
import '../style/Header.css'

function Header() {
  return (
    <header>
      <div className="nav">
        <div className="logo">Santhosh Sivakumar</div>
        <div className="links">
          <a href="#home" className="nav-links">Home</a>
          <a href="#projects" className="nav-links">Projects</a>
          <a href="#contact" className="nav-links">Contact </a>
        </div>
      </div>
    </header>
  )
}

export default Header
