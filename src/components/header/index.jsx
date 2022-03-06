/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/shared/logo.svg'
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg'
import closeIcon from '../../assets/shared/icon-close.svg'
import gsap from 'gsap'

const Header = ({location}) => {
    const [isOpen, setisOpen] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const box = useRef();
    const tl = useRef();
    const q = gsap.utils.selector(box);
    
    const toggle = () => {
        setisOpen(!isOpen)
    }

    window.addEventListener('resize', () => {
        if(window.screen.width > 425){
            setisOpen(false)
        }
    })
    
    document.onclick = (e) => {
        if(e.target.className !== "mobile-nav-link-wrapper " && e.target.className !== "hamburger-icon"){
            setTimeout(() => {    
                setisOpen(false)
            }, 200); 
        }
    }

    useEffect(() => {
        if(location === '/') setIsActive(0)
        if(location === '/destination') setIsActive(1)
        if(location === '/crew') setIsActive(2)
        if(location === '/technologies') setIsActive(3)
    }, [location])

    useEffect(() => {
        tl.current = gsap.timeline().fromTo(box.current, {clipPath: "circle(0px at 218px 44px)", display: "none"}, {clipPath: "circle(100vh at 218px 44px)", display: "flex", duration:0.5, ease: "none"})
                                    .from(q(".mobile-nav-link"), {x: -20, opacity:0, duration:0.3, stagger:0.1})
    }, []);

    useEffect(() => {
        tl.current.reversed(!isOpen)
    }, [isOpen]);
    

    return (
        // Navbar
        <header>
            <nav>
                {/* logo */}
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                {/* plain line middle */}
                <div className="line-through" />
                {/* navigation link */}
                <div className='nav-link-wrapper'>
                    <Link className={`nav-link ${isActive === 0 ? 'active' : ""}`} to='/'><span><span>00</span>HOME</span><div className='hover'/></Link>
                    <Link className={`nav-link ${isActive === 1 ? 'active' : ""}`} to='/destination'><span><span>01</span>DESTINATION</span><div className='hover'/></Link>
                    <Link className={`nav-link ${isActive === 2 ? 'active' : ""}`} to='/crew'><span><span>02</span>CREW</span><div className='hover'/></Link>
                    <Link className={`nav-link ${isActive === 3 ? 'active' : ""}`} to='/technologies'><span><span>03</span>TECHNOLOGY</span><div className='hover'/></Link>
                </div>

                {/* mobile navbar */}
                <div className='hamburger-icon'></div>
                <img className='hamburger-icon' src={isOpen ? closeIcon : hamburgerIcon} alt="hamburger icon" onClick={toggle}/>
                <div className="mobile-nav-link-wrapper" ref={box}>
                    <Link className={`mobile-nav-link ${isActive === 0 ? 'active' : ""}`} to='/'><span><span>00</span>HOME</span><div className='hover'/></Link>
                    <Link className={`mobile-nav-link ${isActive === 1 ? 'active' : ""}`} to='/destination'><span><span>01</span>DESTINATION</span><div className='hover'/></Link>
                    <Link className={`mobile-nav-link ${isActive === 2 ? 'active' : ""}`} to='/crew'><span><span>02</span>CREW</span><div className='hover'/></Link>
                    <Link className={`mobile-nav-link ${isActive === 3 ? 'active' : ""}`} to='/technologies'><span><span>03</span>TECHNOLOGY</span><div className='hover'/></Link>
                </div>
            </nav>
        </header>
    )
}



export default Header