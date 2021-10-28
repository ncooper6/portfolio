import React from 'react'
import {Link} from 'react-router-dom'

import './homepage.css'

const Homepage = () => {
    return (
        <div className="home-wrapper">
            <div className="info-container">
                <h2>UX Researcher & Designer</h2>
                <div className="info-text">
                    <h1>Hi, I'm Nick</h1>
                    <h3>Creating user experiences that not only look amazing, but feel it to.</h3>
                </div>
                <Link to="/work">View Work</Link>
            </div>

            <div className="img-container">
                <div className="img-item-port">
                    <img src="../../images/portrait.webp" alt="portrait of nicholas cooper" />
                </div>
                <div className="img-item-blobTR">
                    <img src="../../images/top-right-blob.svg" alt=""/>
                </div>
                <div className="img-item-blobBL">
                    <img src="../../images/bottom-left-blob.svg" alt=""/>
                </div>
            </div>

        </div>

    )
}

export default Homepage
