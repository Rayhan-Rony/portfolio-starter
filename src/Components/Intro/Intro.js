import React from 'react';
import './Intro.css'
import git from '../../img/github.png'
import fb from '../../img/Facebook.png'
import linkdIn from '../../img/linkedin.png'
import Resume from './Resume of  MD ABU JOBAYER.pdf'

import v2 from '../../img/Vector2.png'

import pic2 from '../../img/pic2.png'



const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I am </span>
                    <span>Md. Abu Jobayer</span>
                    <span>Mern Stack Developer</span>
                </div>
                <a href={Resume} download>

                    <button className='button i-button'>Download Resume</button>
                </a>
                <div className="i-icons">
                    <img src={git} alt="" />
                    <img src={linkdIn} alt="" />
                    <img src={fb} alt="" />
                </div>
            </div>
            <div className="i-right">

                <img src={v2} alt='' />
                <img className='h-pic' src={pic2} alt='' />

                <div className="blur" style={{ background: "rgb (238 210 255)" }}>

                </div>
                <div className='blur' style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem',

                }}>

                </div>
            </div>
        </div >
    );
};

export default Intro;