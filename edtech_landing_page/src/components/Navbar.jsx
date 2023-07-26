import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">CodersCave</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#courses">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">Pricing</a>
        </li>

      </ul>
    </div>
</nav>
  )
}

export default Navbar