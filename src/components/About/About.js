import React from 'react';

import './about.css';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="img-left">
                <img src="../../images/avatar.webp" alt="" />
            </div>
            <div className="info-right">
                <h1>About me</h1>
                <p>Hi I'm Nick, I have recently graduated from the University of Central Lancashire with a First Class Bsc Honours degree in Web Design and Development.</p>
                <p>I enjoy working on User Experience Projects and aim to use the skills I have learnt both at University and Work placements to improve the world one project at a time. </p>
                <p>I am also fond of web development and have hand crafted this portfolio using React.</p>
                <p>I have a passion for travelling and experiencing other cultures and have travelled extensively worldwide. </p>
            </div>
        </div>
    )
}

export default About;