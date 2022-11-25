import '../styles/navbar.css';
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar font-color-1'>
            <div className='navbar__logo'>  
                <h3>Logo</h3>
            </div>

            <div className='navbar__item'>
                <a href='#first-page'>
                  <h3 className='font-color-1'>Home</h3>
                </a>
                <a href='#about-me'>
                  <h3 className='font-color-1'>About Me</h3>
                </a>
                <a href='#project'>
                  <h3 className='font-color-1'>Project</h3>
                </a>
            </div>
        </nav>
    </div>
  )
}
