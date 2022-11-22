import '../styles/project.css';
import React from 'react';

export default function Project() {
  return (
    <div className='project'>
        <h2 className='project__title'>Projects</h2>
        <h4 className='project__subtitle'>Here's is some of my projects</h4>

        <div className='project__listOfProject'>

          <div className='listOfProject__projectContainer'>
            <div className='projectContainer__projectDetail'>
              <h4 className='projectDetail__title'>Project 1</h4>
              <h5 className='projectDetail__subtitle'>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' className='image1'/>
            </div>
              
            <div className='projectContainer__actionButton'>
              <a href><button className='actionButton__liveDemo-button'>Live Demo</button></a>
              <a href><button className='actionButton__code-button'>Code</button></a>
            </div>
          </div>
          
          <div className='listOfProject__projectContainer'>
            <div className='projectContainer__projectDetail'>
              <h4 className='projectDetail__title'>Project 2</h4>
              <h5 className='projectDetail__subtitle'>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' />
            </div>

            <div className='projectContainer__actionButton'>
              <a href><button className='actionButton__liveDemo-button'>Live Demo</button></a>
              <a href><button className='actionButton__code-button'>Code</button></a>
            </div>            
          </div>

          <div className='listOfProject__projectContainer'>
            <div className='projectContainer__projectDetail'>
              <h4 className='projectDetail__title'>Project 3</h4>
              <h5 className='projectDetail__subtitle'>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' />
            </div>
            
            <div className='projectContainer__actionButton'>
              <a href><button className='actionButton__liveDemo-button'>Live Demo</button></a>
              <a href><button className='actionButton__code-button'>Code</button></a>
            </div>
          </div>

          <div className='listOfProject__projectContainer'>
            <div className='projectContainer__projectDetail'>
              <h4 className='projectDetail__title'>Project 4</h4>
              <h5 className='projectDetail__subtitle'>Sub-Title</h5>
              <img src='https://via.placeholder.com/480x270.png' alt='project' />
            </div>
            
            <div className='projectContainer__actionButton'>
              <a href><button className='actionButton__liveDemo-button'>Live Demo</button></a>
              <a href><button className='actionButton__code-button'>Code</button></a>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}
