import '../styles/firstPage.css';
import React from 'react'

export default function FirstPage() {
  return (
    <div className='firstPage'>
      
        <div className='title'>
            <h3>Hi, I'm</h3>
            <h1>Alexander <span>Gozali</span></h1>
            <h5>I'm A <span className='frontEnd'>Front-End Developer</span></h5>
            <div className='button'>
                <a href='#project'><button id='myProject'>My Project</button></a>
                <a href='#contact-me'><button id='myContact'>Contact Me</button></a>
            </div>
        </div>

    </div>
  )
}
