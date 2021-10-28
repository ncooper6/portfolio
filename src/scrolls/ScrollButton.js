import React, { useState, useEffect } from 'react'
import {FaChevronUp} from 'react-icons/fa'
import './scroll.css'
export const ScrollButton = (
    {showBelow}
) => {
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.scrollY > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }
    
    useEffect(() => {
        if (showBelow){
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleClick = () =>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return (
        <div>
            { show &&
                <button className="scroll-button" onClick={handleClick}>
                    <FaChevronUp className="up-icon"/>
                    <p >Back to Top</p>
                </button>
            }
        </div>
    )
}
