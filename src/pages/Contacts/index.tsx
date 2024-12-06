import React from 'react'
import './styles.scss'
import { EmailIcon, PhoneIcon, SocialIcon } from '../../assets/index'

const Contacts = () => {
    return (
        <div id='contacts'className="contacts-section">
            <h1 className="contacts-heading">Contacts</h1>
            <div className="contacts-info">
                <div className="contact-item">
                    <img
                        src={EmailIcon}
                        alt="Email Icon"
                        className="contact-icon"
                    />
                    <div className="contact-details">
                        <p className="contact-label">E-mail</p>
                        <p className="contact-value">kartik@example.com</p>
                    </div>
                </div>
                <div className="contact-item">
                    <img
                        src={PhoneIcon}
                        alt="Phone Icon"
                        className="contact-icon"
                    />
                    <div className="contact-details">
                        <p className="contact-label">Telephone</p>
                        <p className="contact-value">+1 234 567 890</p>
                    </div>
                </div>
                <div className="contact-item">
                    <img
                        src={SocialIcon}
                        alt="Social Icon"
                        className="contact-icon"
                    />
                    <div className="contact-details">
                        <p className="contact-label">Social Media</p>
                        <p className="contact-value">
                            <a
                                href="https://twitter.com/kartik"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                            {' | '}
                            <a
                                href="https://linkedin.com/in/kartik"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
