import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Shoot me a message!</h1>
            <h3>Feel free to contact me on any of the methods below</h3>

            <div className="contact-wrapper">
                    <div className="contact-item">
                        <a href="mailto:coopn005@gmail.com">
                        <img src="../../images/contactIcons/emailIcon.webp" alt="Email Icon" />
                            Coopn005@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/nicholas-cooper-875a2a141/">
                        <img src="../../images/contactIcons/linkedinIcon.webp" alt="LinkedIn Icon" />
                            Nicholas Cooper</a>
                    </div>
                    <div className="contact-item">
                        <a href="tel:07806500453">
                        <img src="../../images/contactIcons/phoneIcon.webp" alt="Phone Icon" />
                            07806500453</a>
                    </div>
            </div>
        </div>
    )
}

export default Contact
