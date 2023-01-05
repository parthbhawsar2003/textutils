
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
  <div className={`container-fluid text-${props.mode==='dark'?'light':'dark'}`}>
    <a className="navbar-brand" href="#">{ props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="#">About</a>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdownname}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{props.dropdown1}</a></li>
            <li><a className="dropdown-item" href="#">{props.dropdown2}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item ">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
      
      
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.togglemode} alert={alert} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlfor="flexSwitchCheckChecked">Enable Dark Mode</label>

</div>
    </div>
  </div>
</nav></>
  )
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    dropdownname:PropTypes.string.isRequired,
    dropdown1:PropTypes.string.isRequired,
    dropdown2:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"home",
    dropdownname:"dropdownname",
    dropdown1:"any",
    dropdown2:"any something"
}
