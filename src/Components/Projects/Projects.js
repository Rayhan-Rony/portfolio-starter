import React from 'react';
import Card from '../Card/Card';
import old from '../../img/old.png'
import lock from '../../img/Lock.png'
import code from '../../img/codeFire.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            {/* left side  */}
            <div className="awesome">
                <span>My Awesome </span>
                <span>Projects</span>


                <div className='blur p-blur' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side  */}
            <div className="cards">
                <div style={{ left: "24rem" }}>
                    <Card
                        name={"Old Sale"}
                        features={"React JS, React Router Dom, Tailwind CSS, Daisy UI, Node JS, Express JS, Firebase, MongoDB, Vercel."}
                        img={old}

                    ></Card>
                </div>
                {/* second Card */}
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        name={"Lock Pc"}
                        features={"React JS, React Router Dom, Tailwind CSS, Daisy UI, Node JS, Express JS, Firebase, MongoDB, Vercel."}
                        img={lock}
                    ></Card>
                </div>
                {/* third card  */}
                <div style={{ top: "19rem", left: "44rem" }}>
                    <Card
                        name={"Code Fire"}
                        features={"React JS, React Router Dom, Tailwind CSS, Daisy UI, Node JS, Express JS, Firebase, MongoDB"}
                        img={code}
                    ></Card>
                </div>
            </div>
        </div >
    );
};

export default Projects;