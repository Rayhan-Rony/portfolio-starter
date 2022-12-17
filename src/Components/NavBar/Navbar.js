import React from 'react';
import Toogle from '../Toogle/Toogle';
import './NavBar.css'
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <div className='n-wrapper' id='Navbar'>
            <div className="n-left">
                <div className="n-name">
                    Jobayer
                </div>
                <Toogle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="active">

                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='projects' smooth={true}>

                            <li>Projects</li>
                        </Link>
                        <Link spy={true} to="skills" smooth={true}>
                            <li>Skills</li>
                        </Link>



                    </ul>
                </div>

                <Link spy={true} to="contact" smooth={true}>

                    <button className="button n-button">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;