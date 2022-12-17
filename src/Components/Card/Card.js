import React from 'react';

import './Card.css'


const Card = ({ name, features, img }) => {

    return (
        <div className="card">
            <img className='img' src={img} alt="" />
            <span>{name}</span>
            <span>{features}</span>
            <button className='c-button'>View Projects</button>
        </div>

    );
};

export default Card;