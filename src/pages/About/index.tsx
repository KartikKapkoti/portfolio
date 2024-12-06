import React from 'react'
import './style.scss'
import messages from './messages'

export const AboutMe = () => {
    return (
        <div id= 'about'className="about-me">
            <div className="about-me-hading">
                <h1 className="heading">{messages.heading}</h1>
            </div>
            <div className="about-me-content">
                <p>{messages.content}</p>
            </div>
        </div>
    )
}

export default AboutMe
