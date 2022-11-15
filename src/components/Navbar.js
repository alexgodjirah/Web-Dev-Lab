import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav>
            <div className='logo'>  
                <h3>Logo</h3>
            </div>

            <div className='navbar-item'>
                <h3>Home</h3>
                <h3>About Me</h3>
                <h3>Personal Project?</h3>
                <button id='contact-me'>Contact Me</button>
            </div>
        </nav>
    </div>
  )
}
