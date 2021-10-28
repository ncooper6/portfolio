import React, {useState, useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { FiMenu} from "react-icons/fi";
import './navbar.css';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (navOpen){
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    }, [navOpen])

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="nav-l">
                    <NavLink exact to="/" onClick={()=> setNavOpen(false)}>
                        NC
                    </NavLink>
                    <button className="nav-toggle" onClick={()=> setNavOpen(!navOpen)}>
                        {navOpen ? <FaTimes/> : <FiMenu/>}
                    </button>
                </div>
                <div className="nav-c" ref={linksContainerRef}>
                    <ul className="nav-c-links" ref={linksRef}>
                        <li>
                            <NavLink activeClassName="activeBtn" exact to="/work" onClick={()=> setNavOpen(false)}>Work</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="activeBtn" exact to="/about" onClick={()=> setNavOpen(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="activeBtn" exact to="/skillset" onClick={()=> setNavOpen(false)}>Skill Set</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-r">
                    <NavLink exact to="/contact">Contact Me</NavLink>
                </div>
                    
            </div>
        </nav>
    )
}

export default Navbar
