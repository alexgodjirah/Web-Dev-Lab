import '../styles/project.css';
import React from 'react';

export default function Project() {
  return (
    <div className='project'>
        <h2>Projects</h2>
        <h4>Here's is some of my projects</h4>

        <div className='listOfProject'>
          <div id='project1'>
            <div className='projectContainer'>
              <h4>Project 1</h4>
              <h5>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' />
            </div>
              
            <div className='project-action-button'>
              <a href><button className='liveDemo-button'>Live Demo</button></a>
              <a href><button className='code-button'>Code</button></a>
            </div>
          </div>
          
          <div id='project2'>
            <div className='projectContainer'>
              <h4>Project 2</h4>
              <h5>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' />
            </div>
            <div className='project-action-button'>
              <a href><button className='liveDemo-button'>Live Demo</button></a>
              <a href><button className='code-button'>Code</button></a>
            </div>
          </div>

          <div id='project3'>
            <div className='projectContainer'>
              <h4>Project 3</h4>
              <h5>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' />
            </div>
            <div className='project-action-button'>
              <a href><button className='liveDemo-button'>Live Demo</button></a>
              <a href><button className='code-button'>Code</button></a>
            </div>
          </div>

          <div id='project4'>
            <div className='projectContainer'>
              <h4>Project 4</h4>
              <h5>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' />
            </div>
            <div className='project-action-button'>
              <a href><button className='liveDemo-button'>Live Demo</button></a>
              <a href><button className='code-button'>Code</button></a>
            </div>
          </div>
        </div>
    </div>
  )
}
