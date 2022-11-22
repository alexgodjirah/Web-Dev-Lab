import '../styles/firstPage.css';
import React from 'react'

export default function FirstPage() {
  return (
    <div className='firstPage'>
      
        <div className='firstPage__title'>
            <h3>Hi, I'm</h3>
            <h1 className='firstPage__h1--size'>Alexander <span>Gozali</span></h1>
            <h4>I'm A <span className='firstPage__h5--color'>Front-End Developer</span></h4>
            <div className='firstPage__button'>
                <a href='#project'>
                  <button className='button button__myProject background-color-1'>My Project</button>
                </a>
                <a href='#contact-me'>
                  <button className='button button__myContact background-color-1'>Contact Me</button>
                </a>
            </div>

            <div className='image'>

            </div>

        </div>

    </div>
  )
}
