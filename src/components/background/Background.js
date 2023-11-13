import React from 'react';
import './index.css';
import logo from '../../assets/logo.webp';
import walking from '../../assets/little-girl.gif'

const Background = () => {
    return (
        <div className='bg-playing'>
            <div className="background"></div>
            <div className="gradient"></div>
            <img src={logo} className="logo"></img>
            <img src={walking} className="playing-gif"></img>
    </div>
  )
}

export default Background
