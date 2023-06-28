import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
            <nav className={` px-3 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
          <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />

          <button className="btn btn-outline-success" type="submit">Search</button>

        </form> */}
                    <div className={`px-5 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input onClick = {props.togglemode}className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Enable Darkmode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar