import '../styles/firstPage.css';
import React from 'react'

export default function FirstPage() {
  return (
    <div className='firstPage'>
      
        <div className='firstPage__title'>
            <h3>Hi, I'm</h3>
            <h1>Alexander <span>Gozali</span></h1>
            <h5>I'm A <span className='firstPage__h5--color'>Front-End Developer</span></h5>
            <div className='firstPage__button'>
                <a href='#project'><button className='button__myProject'>My Project</button></a>
                <a href='#contact-me'><button className='button__myContact'>Contact Me</button></a>
            </div>
        </div>

    </div>
  )
}
