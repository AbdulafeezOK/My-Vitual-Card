import React from 'react';
import About from './About';
import cardImg from '../assets/okunlola.jpeg';

function Main() {
  return (
    <div className='MyCard'>
            <div>
                <img className="CardMi" src={cardImg} alt="myImage" />
            </div>
            <p className='Self'> I'm a <span>Front-End Developer</span> and <span>Electrical Technologist</span>. </p>
            <About header='About me' />
    </div>
  )
}

export default Main