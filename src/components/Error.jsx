import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Error.css'
export default function Error() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className='error-style row'>
            <div className="container">
                <i className="fas fa-dumbbell"></i>
                <p>Workout Budddy</p>
                <h1>404</h1>
                <h1>Not Found</h1>
                <button onClick={handleClick}>Go back</button>
            </div>
        </div>
    )
}
