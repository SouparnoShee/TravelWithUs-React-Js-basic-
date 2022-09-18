import React from 'react'
import Card from './CompBox/Card'
import ImgData from './CompBox/ImgData'

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>OUR SERVICES</h1>
        <h3 className='my-3 text-center'>Places we offer mostly</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                ImgData.map((val,ind)=>{
                  return <Card key={ind} imgsrc={val.Imgsrc} title={val.title}/>
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
