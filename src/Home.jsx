import React from 'react'
import { Link } from 'react-router-dom'
import web from '../src/img/Main.png'
import Common from './CompBox/Common'

function Home() {
  return (
    <>
    <Common title="Make your journey fun with" visit="/about" btnName="About Us" imgsrc={web} more="Visit our about page to know  about us"/>
    </>
  )
}

export default Home
