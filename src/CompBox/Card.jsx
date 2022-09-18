import React from 'react'
import { Link } from 'react-router-dom'
import web from '../img/abc.png'

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img  src={props.imgsrc} className=" imgl card-img-top" alt="Nothing" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Contact Now to visit</p>
                        <Link to="/contact" className="btn btn-primary">Book Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
