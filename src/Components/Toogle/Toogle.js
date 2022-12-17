import React from 'react';
import './Toogle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Toogle = () => {
    const theme = useContext(themeContext)
    const darkmode = theme.state.darkmode
    const handleClick = () => {
        theme.dispatch({ type: 'toogle' })
    }
    return (
        <div className='toogle' onClick={handleClick}>
            <Sun></Sun>
            <Moon></Moon>
            <div className="t-button"

                style={darkmode ? { left: "2px" } : { right: "2px" }}>

            </div>
        </div>
    );
};

export default Toogle;