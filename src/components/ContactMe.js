import '../styles/contactMe.css'
import React from 'react'

export default function ContactMe() {
  return (
    <div className='getInTouch'>
        <h1>Get In Touch</h1>

        <div className='contactMe'>
            <div className='personalData'>
                <div className='myPhone'>
                    <h4>Phone</h4>
                        <p>(+62) 813-3076-8081</p>
                    </div>

                <div className='myEmail'>
                    <h4>Email</h4>
                        <p>alexandercgoz21@gmail.com</p>
                    </div>
                <div className='mySocials'>
                    <h4>Socials</h4>
                        <p>LinkedIn</p>
                        <p>GitHub</p>
                </div>
            </div>

            <div className='inputs'>
            <form autoComplete='on'>
                <div className='name-email'>
                    <div className='nameContainer'>
                        <label>Name</label>
                        <input id='name' type='name' />
                    </div>

                    <div className='emailContainer'>
                        <label>Email</label>
                        <input id='email' type='email' />
                    </div>
                </div>
                
                <div className='subjectContainer'>
                    <label>Subject</label>
                    <input id='subject' type='text' />
                </div>

                <div className='messageContainer'>
                    <label>Message</label>
                    <textarea id='message' type='text' />
                </div>

                <button id='submit-button' type='submit'>Submit</button>
            </form>
            </div>
        </div>
    </div>
  )
}
