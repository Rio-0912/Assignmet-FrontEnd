import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar  navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/">{props.title} </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className=" d-flex ">
                        <div className="form-check mx-3">
                            <input className="form-check-input" type="radio" onClick={props.greene} name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Green
                            </label>
                        </div>
                       
                            <div className="form-check mx-3">
                                <input className="form-check-input" type="radio" onClick={props.bluee} name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Blue
                                </label>
                            </div>
                            <div className="form-check mx-3">
                                <input className="form-check-input" type="radio" onClick={props.rede} name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Red
                                </label>
                            </div>
                        </div>
                        
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-`}>
                            <input className={`form-check-input navbar- `}  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label     `} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable dark mode ': 'Enable light mode'}</label>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
