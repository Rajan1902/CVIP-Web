import React from 'react'

const Pricing = () => {
  return (
<div className="container pricing" id='pricing'>
    <h3 className='courses-title'>Start Learning Today!</h3>
<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">₹0<small className="text-body-secondary fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>1 month free trail</li>
              <li>1 Device</li>
              <li>Sample lectures</li>
              <li>max resolution: 720p</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Gold Membership</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">₹299<small className="text-body-secondary fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>All couses available</li>
              <li>3 devices</li>
              <li>best resolution available</li>
              <li>course completion certificates</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Buy Now!</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">Platinum Membership</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">₹399<small className="text-body-secondary fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
            <li>All couses available</li>
              <li>5 devices</li>
              <li>best resolution available</li>
              <li>course completion certificates</li>
              <li>Downloadable Content</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Buy Now!</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pricing