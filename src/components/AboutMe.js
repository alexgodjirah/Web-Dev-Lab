import '../styles/aboutMe.css'
import React from 'react'

export default function AboutMe() {
  return (
    <div className='about-me'>

        <div className='about-me__summary'>
            <h2 className='summary__title'>About Me</h2>

            <div className='summary__text'>
                <p>Hello, I'm Alexander and I'm a <span>Front-End Web Developer</span>.</p>
                <br />
                <p>I'm passionate about creating a mindful and meaningful products using my creativity, curiosity, and discipline to help me fulfilling my dreams.</p>
                <div className='summary__button'> 
                    <a><button className='button background-color-2'>Resume</button></a>
                    <a><button className='button background-color-2'>My Projects</button></a>
                </div>
            </div>

        </div>

        <div className='about-me__skills '>
            <h2 className='skills__title'>Skills</h2>
            <div className='skills__container'>
                <div className='skills__container-item'>
                    <h3 className='container-item__title'>Front-End</h3>
                        <ul className='container-item__list'>
                            <li className='container-item__item'>HTML</li>
                            <li className='container-item__item'>CSS</li>
                            <li className='container-item__item'>ReactJS</li>
                            <li className='container-item__item'>NextJS</li>
                            <li className='container-item__item'>Vue</li>
                            <li className='container-item__item'>Redux</li>
                            <li className='container-item__item'>Material UI</li>
                        </ul>
                </div>
                <div className='skills__container-item'>
                    <h3 className='container-item__title'>Back-End</h3>
                        <ul className='container-item__list'>
                            <li className='container-item__item'>NodeJS</li>
                            <li className='container-item__item'>ExpressJS</li>
                            <li className='container-item__item'>Sequelize ORM</li>
                            <li className='container-item__item'>PostgreSQL</li>
                        </ul>
                </div>
                <div className='skills__container-item'>
                    <h3 className='container-item__title'>Languages</h3>
                        <ul className='container-item__list'>
                            <li className='container-item__item'>JavaScript</li>
                            <li className='container-item__item'>C#</li>
                        </ul>
                </div>
                <div className='skills__container-item'>
                    <h3 className='container-item__title'>Tools</h3>
                        <ul className='container-item__list'>
                            <li className='container-item__item'>VS Code</li>
                            <li className='container-item__item'>Postman</li>
                            <li className='container-item__item'>Git</li>
                            <li className='container-item__item'>Bash</li>
                            <li className='container-item__item'>Figma</li>
                        </ul>
                </div>
            </div>
        </div>

    </div>
  )
}
