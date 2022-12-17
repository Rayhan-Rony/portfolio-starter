import React from 'react';
import './Skills.css'

const Skills = () => {
    return (

        <div id='Skills'>
            <h1 className='s-heading'>My Skills</h1>
            <hr />
            <div className='skills'>
                <div className="skill">


                    <div className="circle">
                        HTML
                    </div>
                </div>
                <div className="skill">
                    <div className="circle">
                        CSS
                    </div>
                </div>
                <div className="skill">
                    <div className="circle">
                        JavaScript
                    </div>
                </div>
                <div className="skill">
                    <div className="circle">
                        React
                    </div>
                </div>
                <div className="skill">
                    <div className="circle">
                        MongoDB
                    </div>
                </div>
                <div className="skill">
                    <div className="circle">
                        NodeJs
                    </div>
                </div>
                <div className="skill">
                    <div className="circle">
                        ExpressJs
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;