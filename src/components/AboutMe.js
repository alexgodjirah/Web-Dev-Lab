import '../styles/aboutMe.css'
import React from 'react'

export default function AboutMe() {
  return (
    <div className='aboutMe'>

        <div className='summary'>
            <h2>About Me</h2>

            <div className='text'>
                <p>Hello, I'm Alexander and I'm a Front-End Web Developer</p>

                <p>I'm passionate about creating a mindful and meaningful products (website, food, arts) using my creativity, curiosity, and discipline to help me fulfilling my dreams</p>
            </div>

            <div className='button'> 
                <button>Resume</button>
                <button>Hire Me</button>
            </div>
        </div>

        <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-grid'>
                <div>
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
                <div>
                    <h3>Back-End</h3>
                        <ul>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Sequelize ORM</li>
                            <li>PostgreSQL</li>
                        </ul>
                </div>
                <div>
                    <h3>Language</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>C#</li>
                        </ul>
                </div>
                <div>
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
