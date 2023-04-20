import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"
import "./Navigation.css";

export default function LandingPageNavigation(props) {
    const navRef = useRef();

    const handleNavClick = () => {
        const navClasses = navRef.current.classList;
        navClasses.add("menu-animatable");
        if (!navClasses.contains("menu-visible")) {
            navClasses.add("menu-visible");
        } else {
            navClasses.remove("menu-visible");
        }
    }

    const OnTransitionEnd = () => {
        navRef.current.classList.remove("menu-animatable");
    }

    useEffect(() => {
        navRef.current.addEventListener("transitionend", OnTransitionEnd);
       
       return () => {
            navRef.current.removeEventListener("transitionend", OnTransitionEnd);
        };
    },[]);


    return (
        <div>
            <div id="landingpage-navigation" className="navigation-animation" ref={navRef}>
                <div className="svg-container nav-containers">
                    <Link to="/"><img src={logo} alt="Pentia"/></Link>
                </div>
                <div id="landingpage-navigation-expand" className="nav-containers" onClick={handleNavClick}>
                    <span className="expand-line"></span>
                    <span className="expand-line"></span>
                    <span className="expand-line"></span>
                </div>             
                <div id="landingpage-navigation-menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/cases">Cases</Link>
                            </li>
                            <li>
                                <Link to="/teknologi">Teknologi</Link>
                            </li>
                            <li>
                                <Link to="/om-os">Om os</Link>
                            </li>
                            <li>
                                <Link to="/kontakt">Kontakt</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}