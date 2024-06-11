import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-lg-start text-white row" style={{ backgroundColor: 'black', fontSize: '1.6rem' }}>
            {/* Section: Social media */}
            <section className="d-flex w-100 justify-content-between p-4" style={{ backgroundColor: '#04aa6d' }}>
                {/* Left */}
                <div className="ml-5">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* Left */}

                {/* Right */}
                <div>
                    <a href="/" className="mr-4">
                        <i className="fab fa-facebook-f" style={{ color: 'black' }}></i>
                    </a>
                    <a href="/" className="text-white mr-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://ashuraportfolio.onrender.com/" rel="noreferrer" target="_blank" className="mr-4">
                        <i className="fab fa-google" style={{ color: 'black' }}></i>
                    </a>
                    <a href="https://www.instagram.com/ashuramajestic/" target="_blank" rel="noreferrer" className="text-white mr-4">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/" className="mr-4">
                        <i className="fab fa-linkedin" style={{ color: 'black' }}></i>
                    </a>
                    <a href="https://github.com/AshuraMajestic" target="_blank" rel="noreferrer" className="text-white mr-4">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                {/* Right */}
            </section>
            {/* Section: Social media */}

            {/* Section: Links  */}
            <section className="row">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 col-12 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold">WorkOut Budddy</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p>
                                Ashura Majestic
                                <br /><br />
                                Kalol, Gandhinagar, 282725
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold">Products</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p>
                                <a href="/" className="text-white">Diet Planner</a>
                            </p>
                            <p>
                                <a href="/" className="text-white">Workout Planner</a>
                            </p>
                            <p>
                                <a href="/" className="text-white">Advisior</a>
                            </p>
                            <p>
                                <a href="/" className="text-white">Happy</a>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p><i className="fas fa-home mr-3"></i> Kalol,Gandhinagar-382725, India</p>
                            <p><i className="fas fa-envelope mr-3"></i> ashuramajestic@gmail.com</p>

                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}

            {/* Copyright */}
            <div className="text-center w-100 p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <p className='m-0'>Designed By:<a className='text-white' href='https://github.com/SuGAr9807' rel='noreferrer' target='_black'>@KrutvaPatel</a></p>
                <br />
                © 2024
                <a className="text-white pr-2 " href="https://github.com/AshuraMajestic" target='_blank' rel='noreferrer'> ashuramajestic</a> All Rights Reserved.
            </div>
            {/* Copyright */}
        </footer>
    )
}
