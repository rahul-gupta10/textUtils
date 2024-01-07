import React , {} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {

  // const color1 = ()=> {
  //   alert("color 1")
  // }
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid navbar mx-4">
          <Link className={`navbar-brand navbar text-${props.mode==="light"?"dark":"light"}`} to="/" >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className="nav-link menu" style={props.mode==="light"?{color:"black"}:{color:"white"}} aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" style={props.mode==="light"?{color:"black"}:{color:"white"}} to="/about" >
                  About
                </Link>
              </li>
            </ul>
            <div className="colorDiv">
              <div className="color1" onClick={()=>{props.bgColor('rgb(80, 90, 90)')}}></div>
              <div className="color2" onClick={()=>{props.bgColor('rgb(63, 9, 77)')}}></div>
              <div className="color3" onClick={()=>{props.bgColor('rgb(59, 40, 18)')}}></div>
            </div>
              <div className="form-check form-switch">
                <input id="mode" className="form-check-input" type="checkbox" role="switch" onClick={props.modeButton}/>
                <label className="form-check-label">{props.mode === "light"?"Enable dark mode" : 'Enable light mode'}</label>
              </div>
          </div>
        </div>
      </nav>
    
    </>
  )
}


Navbar.propTypes = {
    mode : PropTypes.string.isRequired,
}

Navbar.defaultProps ={
    mode : "Error in mode props",
}
// rgb(80, 90, 90)