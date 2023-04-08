import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';
import logo from './../../logo.png';
function Header() {
    return (
        <>
            <header>
                <div className="topbar">
                    <div className="container">
                        <div class="d-flex bd-highlight">
                            <div class="py-2 flex-grow-1 bd-highlight ">
                                <i class="fa fa-phone me-2"></i>99xxxx88xx
                            </div>
                            <div class="py-2 bd-highlight">
                                <ul class="social-network">
                                    <li><a class="waves-effect waves-dark" href="/"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="/"><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="/"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="/"><i class="fa fa-pinterest"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="/"><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear navbar-sticky">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} className="" alt="logo" />
                            <span>Brand Logo</span>
                        </Link>
                        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/">About us</a>
                                </li>
                                <li class="nav-item dropdown fade-up">
                                    <a class="nav-link dropdown-toggle " href="#/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sevices
                                    </a>
                                    <ul class="dropdown-menu rounded-1 p-0 border-0 shadow" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#/">Action</a></li>
                                        <li><a class="dropdown-item" href="#/">Another action</a></li>
                                        <li><a class="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/">Sevices</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/">Contact us</a>
                                </li>

                            </ul>
                            <span class="navbar-text btn btn-light text-sign fw-bold">
                                Sign up
                            </span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;