import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const Banner = () => {
  return (
    <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
    <h1 className="text-body-emphasis">Welcome to Coders Cave</h1>
    <p className="col-lg-6 mx-auto mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt est accusantium enim eligendi praesentium error assumenda ea, voluptatibus ipsam consequatur unde quasi, officiis natus nulla perferendis vitae eaque magni!
    </p>
    <button className="btn btn-primary px-5 mb-5" type="button">
      Register Now
    </button>
  </div>
  )
}

export default Banner