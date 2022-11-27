import '../styles/firstPage.css'
import React from 'react'

export default function FirstPage() {
    return (
        <div className="first_page">
            <div className="first_page--name">
                <h3 className="name--h3 font-color-1">Hi, I'm</h3>
                <h1 className="name--h1 font-color-2">
                    Alexander <br /> Gozali
                </h1>

                <div className="name--social_icons name--social_icons-gap-3vw">
                    <img
                        className="image-resize"
                        src="https://via.placeholder.com/50x50"
                        alt="social-icon"
                    />
                    <img
                        className="image-resize"
                        src="https://via.placeholder.com/50x50"
                        alt="social-icon"
                    />
                    <img
                        className="image-resize"
                        src="https://via.placeholder.com/50x50"
                        alt="social-icon"
                    />
                </div>
            </div>

            <div className="first_page--image">
                <picture>
                    <source srcSet="" />
                    <img
                        className="image--1"
                        src="https://via.placeholder.com/300x500/292929/969696"
                        alt="placehoder"
                    />
                </picture>
            </div>

            <div className="first_page--title">
                <div className="title--position">
                    <h3 className="position--h3 font-color-1">JUNIOR</h3>
                    <h1 className="position--h1 font-color-2">Front-End</h1>
                    <h2 className="position--h2 font-color-1">DEVELOPER</h2>
                </div>

                <div className="title--action">
                    <div className="action--anchor">
                        <a
                            className="anchor--link anchor--decoration--none"
                            href="#contact-me"
                        >
                            <h4 className="anchor--title font-color-1">
                                Contact Me
                            </h4>
                        </a>
                    </div>

                    <div className="action--anchor">
                        <a
                            className="anchor--link anchor--decoration--none"
                            href="#project"
                        >
                            <h4 className="anchor--title font-color-1">
                                My Projects
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
