import React from 'react'
import Common from './CompBox/Common'
import web from '../src/img/Main.png'
import web2 from '../src/img/abc.png'

function About() {
  return (
    <div>
      <Common title="Welcome to the About Page of" imgsrc={web2} visit="/contact" btnName="Contact Now" more="Contact Us to make your travel fun"/>
    </div>
  )
}

export default About
