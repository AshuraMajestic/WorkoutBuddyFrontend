import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Heroine from '../assets/heroine.svg';
import Hero from '../assets/hero.svg';
import Health from '../assets/health.png';
export default function Home() {
    const nav = useNavigate();

    const goToUrl = (url) => {
        nav(url);
    }
    return (
        <div className="container home-page">
            <div className="container-fluid mt-5 section">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-12 hero-text order-md-0 order-1 justify-content-center align-items-start flex-column">
                                <h1>WE WILL HELP YOU TO</h1>
                                <h1>STAY HEALTHY AND FIT</h1>
                                <p>Looking for a <span>HealthHub</span> to help you stay motivated and reach your fitness goals? Look no further than our website, where you can connect with your choice gyms and advisors who can help you to achieve your best selves!</p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-12 hero-text order-md-1 order-0">
                                <figure>
                                    <img src={Heroine} alt="herosection_image" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 service-style section" id="service-id">
                <div className="row">
                    <div className="col-md-10 col-10 col-lg-12 col-xl-12 mx-auto">
                        <h1 className="text-center main-heading">Our Services</h1>
                        <p className="text-center sub-heading">Reach your Dream Body with Us</p>
                        <div className="row">
                            <div className="col-12 col-lg-4 col-xl-4">
                                <div className="box" onClick={() => goToUrl('/nutrients')}>
                                    <div className="our-services settings">
                                        <div className="icon">
                                            <img src={Health} alt="setting" />
                                        </div>
                                        <h4>Diet Planner</h4>
                                        <p>Plan your diet with help of various experts and doctors according to your workout needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-4">
                                <div className="box" onClick={() => goToUrl('/body')}>
                                    <div className="our-services speedup">
                                        <div className="icon">
                                            <img src="https://i.imgur.com/6NKPrhO.png" alt="sppedup" />
                                        </div>
                                        <h4>Scheduler</h4>
                                        <p>Schedule your workouts and daily routine.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-4">
                                <div className="box">
                                    <div className="our-services privacy">
                                        <div className="icon">
                                            <img src="https://i.imgur.com/AgyneKA.png" alt="privacy" />
                                        </div>
                                        <h4>Weekly Report</h4>
                                        <p>Check your weekly progress and fruitful gains by our systematic weekly reports.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-4">
                                <div className="box" onClick={() => goToUrl('/body')}>
                                    <div className="our-services backups">
                                        <div className="icon">
                                            <img src="https://i.imgur.com/vdH9LKi.png" alt="backups" />
                                        </div>
                                        <h4>Home Workout planner</h4>
                                        <p>Gym is far Away? Not a problem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-4">
                                <div className="box" onClick={() => goToUrl('/login')}>
                                    <div className="our-services ssl">
                                        <div className="icon">
                                            <img src="https://i.imgur.com/v6OnUqu.png" alt="SSL secured" />
                                        </div>
                                        <h4>Login</h4>
                                        <p>Old User . Login here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-4 col-lg-4">
                                <div className="box" onClick={() => goToUrl('/membership')}>
                                    <div className="our-services database">
                                        <div className="icon">
                                            <img src="https://i.imgur.com/VzjZw9M.png" alt="Database" />
                                        </div>
                                        <h4>Membership</h4>
                                        <p>Buy our membership and get Premium Information as well as services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 about-style section" id="about-id">
                <div className="row">
                    <div className="col-lg-12 col-xl-12 col-10 mx-auto">
                        <h1 className="text-center main-heading">About Us</h1>
                        <p className="text-center sub-heading">Stay Healthy With Us</p>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-12 order-md-0 order-0 hero-text justify-content-center text-align-center align-items-start flex-column">
                                <figure>
                                    <img src={Hero} alt="herosection_image" />
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-12 hero-text order-md-1 order-1">
                                <h1>WE ARE THE PROFESSIONAL WORKOUT ADVISOR</h1>
                                <p className="about-para">Looking for a <span>Health Hub</span>, to help you stay motivated and reach your fitness goals? Look no further than our website, where you can connect with your choice gyms and advisors who can help you to achieve your best selves!</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
