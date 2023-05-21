import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <div className='header-button'>About</div>
            <div className='header-button'>Resume</div>
            <div className='header-button'>Portfolio</div>
            <div className='header-button'>Contact</div>
        </div>
        );
}

export default Header;