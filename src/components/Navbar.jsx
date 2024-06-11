import React from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div className="navbar-style container-fluid center">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/"><i className="fas fa-dumbbell"></i></Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active mx-auto">
                                    <Link className="nav-link" to="/"><span className="line"></span>Home</Link>
                                </li>
                                <li className="nav-item mx-auto">
                                    <Link className="nav-link" to="/nutrients"><span className="line"></span>Nutrition</Link>
                                </li>
                                <li className="nav-item mx-auto">
                                    <Link className="nav-link" to="/body"><span className="line"></span>Home Workout</Link>
                                </li>
                                <li className="nav-item mx-auto">
                                    <Link className="nav-link" to="/contact"><span className="line"></span>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        {!auth ? <button className="btn btn-outline-success login-button" type="button"><Link to="/login">Login/SignUp</Link></button> : <button className="btn btn-outline-success login-button" onClick={logout} type="button">Logout</button>}

                    </nav>
                </div>
            </div>
        </div>
    );
}
