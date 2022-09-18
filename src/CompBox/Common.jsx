import React from 'react'
import web from '../img/Main.png'
import { Link } from 'react-router-dom';

function Common(props) {
  return (
    <div>
      <section id='header' className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column ">
                  <h1>{props.title}<br /> <strong className='Headline'>TravelwithUs</strong></h1>
                  <h2 className='belowhead my-3'>Make your travels easy with us, {props.more} <br /> View our services and make contacts now</h2>
                  <div className="mt-4">
                    <Link to={props.visit} className='btn-get-started'>
                      {props.btnName}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img className='imagestyle anime' src={props.imgsrc} alt="nothing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Common
