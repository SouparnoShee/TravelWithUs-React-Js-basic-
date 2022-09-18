import React from 'react'
import { useState } from 'react';

function Contact() {

// Use this below technique to make contact forms, note it down

  const [val, setVal]=useState({
    fullname:"",
    Phone:"",
    Email:"",
    Message:"",
  })
  const OnchangeEvent=(e)=>{
    // targetting the names and value that changes when we type
    const {name, value}=e.target;
    // setting the state , it takes a parameter that returns the previous value first and then says that return the Name attribute first and then return value in object manner
    setVal((preval)=>{
      return{
        ...preval,
        [name]:value,

      }
    })
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`Your Name is ${val.fullname}, Your Phone number is ${val.Phone}, Your Email is ${val.Email}, And message is ${val.Message}`)
    console.log(`Your Name is ${val.fullname}, Your Phone number is ${val.Phone}, Your Email is ${val.Email}, And message is ${val.Message}`)

  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name='fullname' value={val.fullname } onChange={OnchangeEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number" name='Phone' value={ val.Phone} onChange={OnchangeEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" name='Email' value={val.Email } onChange={OnchangeEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Want to write a message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='Message' value={ val.Message} onChange={OnchangeEvent}></textarea>
              </div>
              <div className="col-12">
                <button className=" submitbutton" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
