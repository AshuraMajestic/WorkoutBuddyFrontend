import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://workoutbuddyservice.onrender.com/contact', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                navigate('/login')
                throw new Error('Failed to submit form');
            }

            // Clear form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
            alert('Message Sent');
            // Handle success message or redirect if needed
        } catch (error) {
            navigate('/error');
            console.error('Error submitting form:', error);
            // Handle error, show error message to user, etc.
        }
    };
    return (
        <div className="container contact-page">
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto contact-style">
                        <div className="row">
                            <h1 >Contact Form</h1>
                            <form id="contact_form" className='col-12' onSubmit={handleSubmit}>
                                <div className="mb-2 row">
                                    <div className="col">
                                        <label htmlFor="first_name">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            id="first_name"
                                            name="firstName"
                                            placeholder='Enter First Name'
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            maxLength="50"
                                            className="form-control"
                                            id="last_name"
                                            name="lastName"
                                            placeholder='Enter Last Name'
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-5 row">
                                    <div className="col">
                                        <label htmlFor="email_addr">Email address</label>
                                        <input
                                            type="email"
                                            required
                                            maxLength="50"
                                            className="form-control"
                                            id="email_addr"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='Enter Email'
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone_input">Phone</label>
                                        <input
                                            type="tel"
                                            required
                                            maxLength="50"
                                            className="form-control"
                                            id="phone_input"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder='Enter Mobile Number'
                                        />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Enter Your Message for us....'
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary px-4 btn-lg"
                                >Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
