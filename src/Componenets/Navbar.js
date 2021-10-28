// Type rfc to get (React function based components). rfc is an shortkey in es7.

import React from "react";
// impt Short key for (PropTypes)
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {  // We make props to customize name and use the same navbar wherever we need.
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/about">
                                {props.abouttext}
                            </Link> */}
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form> */}
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input b1" onClick={props.toggleMode} type="checkbox" role="switch" id="b1" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="b2" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Red Mode</label>
                    </div>
                    <div class="form-check form-switch mx-2">
                        <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="b3" />
                        <label class={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Green Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// These are just for security and precations reasons...

// Setting proptypes so that, if we send any other type like int here, it will give an error.
// pts for (PropTypes.string)
Navbar.prototypes = {
    title: PropTypes.string,  // .string to make sure we pass string only.
    abouttext: PropTypes.string.isRequired  // to make it necessary (required) otherwise it gives an error.
}

// Default props in case we forget to set the props.
Navbar.defaultProps = {
    title: 'set title here!',
    abouttext: 'set about here!'
}
