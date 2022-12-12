import React from 'react';
import './NavBar.css'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">
                    Jobayer
                </div>
                <p>Toggle</p>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Skills</li>

                    </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>
        </div>
    );
};

export default Navbar;