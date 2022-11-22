import '../styles/contactMe.css'
import React from 'react'

export default function ContactMe() {
  return (
    <div className='getInTouch'>
        <h2>Get In Touch</h2>

        <div className='getInTouch__contactMe'>
            <div className='contactMe__personalData'>
                <div className='personalData__myPhone'>
                    <h4 className='myPhone__title'>Phone</h4>
                        <p className='myPhone__paragraph'>(+62) 813-3076-8081</p>
                    </div>

                <div className='personalData__myEmail'>
                    <h4 className='myEmail__title'>Email</h4>
                        <p className='myEmail__paragraph'>alexandercgoz21@gmail.com</p>
                    </div>
                <div className='personalData__mySocials'>
                    <h4 className='mySocials__title'>Socials</h4>
                        <p className='mySocials__paragraph'>LinkedIn</p>
                        <p className='mySocials__paragraph'>GitHub</p>
                </div>
            </div>

            <div className='form-inputs'>
            <form>
                <div className='form-inputs__name-email'>
                    <div className='name-email__name-container'>
                        <label>Name</label>
                        <input className='name-container__input' type='name' />
                    </div>

                    <div className='name-email__email-container'>
                        <label>Email</label>
                        <input className='email-container__input' type='email' />
                    </div>
                </div>
                
                <div className='form-inputs__subject-container'>
                    <label>Subject</label>
                    <input className='subject-container__input' type='text' />
                </div>

                <div className='form-inputs__message-container'>
                    <label>Message</label>
                    <textarea className='message-container__input' type='text' />
                </div>

                <button className='form-inputs__submit-button' type='submit'>Submit</button>
            </form>
            </div>
        </div>
    </div>
  )
}
