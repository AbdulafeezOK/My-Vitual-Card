import React from 'react';
import '../About/About.css'


function About(prop) {
  return (
    <div className='About'>
        <h1>{prop.header}</h1>
        <p>Okunlola Abdulafeez shola is a Front-End web developer and Electrical technologist
          , he holds a Higher National Diploma certificate of Electrical and Electronic Engineering 
          Technology from Kwara State Polytechnic, Ilorin. Responsive web designer certification from 
          freeCodeCamp and currently learning web development from Meta to earn Meta Front-End developer
           professional certificate a seven months online course through coursera. 
        </p>
    </div>
  )
}

export default About