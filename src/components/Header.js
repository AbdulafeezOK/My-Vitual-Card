import React from 'react';
import cardImg from '../assets/email.png';

function Header() {
  return (
    <div className='Header'>
        <div className='App-logo'>
            <p className='Ptext'>Abdulafeez<span className="Logo">.OK</span></p>
        </div>
        <div className='Emailme'>
            <a href="mailto:sholaafeez81@outlook.com"><img src={cardImg} alt="Email" height="50" weight="50" /></a>
        </div>
    </div>
  )
}

export default Header