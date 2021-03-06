import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Navbar.css';

function Navbar() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <div className="nav__contents">
                <img 
                    onClick={ () => history.push('/')}
                    className="nav__logo"
                    src="https://netflix-clone-fcd36.web.app/netflix-logo.png" 
                    alt="" />

                {/*<div className="language__container">
                    <select>
                        <option>English</option>
                        <option>Русский</option>
                    </select>
                </div>*/}

                <img 
                    onClick={ () => history.push('/profile')}
                    className="nav__avatar"
                    src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg"
                    alt="" />

            </div>
            

        </div>
    )
}

export default Navbar
