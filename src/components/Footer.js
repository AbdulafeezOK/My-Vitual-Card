import React from 'react';
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import Whatsapp from '../assets/whatsapp.png'

function Footer() {
  return (
    <div className='Social-icon'>
        <a className='Social' href="http://www.fb.com/shola.afeez" ><img src={Facebook} alt="" height="50" weight="50" /></a>
        <a className='Social' href="https://www.instagram.com/abdulafeez_ok" ><img src={Instagram} alt="" height="50" weight="50" /></a>
        <a className='Social' href="https://www.twitter.com/@oash_affable" ><img src={Twitter} alt="" height="50" weight="50" /></a>
        <a className='Social' href="https://www.linkedin.com/in/abdulafeez-shola-okunlola-54b13a145" ><img src={Linkedin} alt="" height="50" weight="50" /></a>
        <a className='Social' href="https//wa.me/+2348154502738"><img src={Whatsapp} alt="" height="50" weight="50" /></a>
    </div>
  )
}

export default Footer