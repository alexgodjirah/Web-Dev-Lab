import '../styles/aboutMe.css';
import React from 'react';
import TechStack from './TechStack';

export default function AboutMe() {
    return (
        <div className="about_me">
            <div className="about_me--summary">
                <div className="summary--title">
                    <h2>About Me</h2>
                </div>

                <div className="summary--text">
                    <h3 className="text--title">
                        Hello, I'm{' '}
                        <span className="font-color-2">Alexander</span>.
                    </h3>
                    <div>
                        <p className="text--paragraph">
                            Dedicated and passionate full-stack web developer
                            graduate from Binar Academy with one year of
                            experience in web development.
                        </p>

                        <p className="text--paragraph">
                            I'm passionate about creating mindful and meaningful
                            products using my creativity, curiosity, and
                            discipline
                        </p>

                        <p className="text--paragraph">
                            to help me fulfilling my dreams. Interested in
                            designing and finding harmony in every web design I
                            create. Looking further to improve my web
                            development skills as a{' '}
                            <span className="text-bold font-color-2">
                                Front-End Developer
                            </span>
                            .
                        </p>
                    </div>
                </div>

                <div className="summary--button">
                    <a href=".my-resume">
                        <button className="button">Resume</button>
                    </a>
                    <a href="#my-projects">
                        <button className="button2">My Projects</button>
                    </a>
                </div>
            </div>

            <div className="about_me--tech_stack">
                <TechStack />
            </div>
        </div>
    );
}
