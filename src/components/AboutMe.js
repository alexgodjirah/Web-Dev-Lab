import '../styles/aboutMe.css'
import React from 'react'

export default function AboutMe() {
  return (
    <div className='aboutMe'>

        <div className='summary'>
            <h2>About Me</h2>

            <div className='text'>
                <p>Hello, I'm Alexander and I'm a <span>Front-End Web Developer</span>.</p>
                <br />
                <p>I'm passionate about creating a mindful and meaningful products using my creativity, curiosity, and discipline to help me fulfilling my dreams.</p>
                <div className='button'> 
                    <a><button id='myResume'>Resume</button></a>
                    <a><button id='hireMe'>Hire Me</button></a>
                </div>
            </div>

        </div>

        <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-grid'>
                <div id='frontEnd-skills'>
                    <h3>Front-End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>Vue</li>
                            <li>Redux</li>
                            <li>Material UI</li>
                        </ul>
                </div>
                <div id='backEnd-skills'>
                    <h3>Back-End</h3>
                        <ul>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Sequelize ORM</li>
                            <li>PostgreSQL</li>
                        </ul>
                </div>
                <div id='languages-skills'>
                    <h3>Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>C#</li>
                        </ul>
                </div>
                <div id='tools-skills'>
                    <h3>Tools</h3>
                        <ul>
                            <li>VS Code</li>
                            <li>Postman</li>
                            <li>Git</li>
                            <li>Bash</li>
                            <li>Figma</li>
                        </ul>
                </div>
            </div>
        </div>

    </div>
  )
}
