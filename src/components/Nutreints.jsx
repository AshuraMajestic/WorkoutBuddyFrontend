import React, { useState } from 'react';
import '../styles/Nutrients.css';

export default function Nutreints() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = { height, weight, gender, age };

        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');

            // Check if the token exists and is a valid JSON string
            if (!token) {
                throw new Error('Token not found in localStorage');
            }

            // Use the token directly in the request header without parsing
            const response = await fetch(`https://workoutbuddyservice.onrender.com/findDishes`, {
                // const response = await fetch('http://localhost:5000/findDishes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token // Use the token directly
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const dishes = await response.json();
            displayDishes(dishes);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to fetch data');
        }
    };

    const displayDishes = (dishes) => {
        const tableBody = document.getElementById('food-table-body');

        // Clear previous data
        tableBody.innerHTML = '';

        if (dishes.length === 0) {
            // Display message if no dishes found
            tableBody.innerHTML = '<tr><td colspan="6">No dishes found</td></tr>';
            setError('No dishes found');
        } else {
            // Render each dish
            dishes.forEach((dish) => {
                const { dish_name, calories, macronutrients, preparation_instructions } = dish;
                const { proteins, fats, carbohydrates } = macronutrients;

                // Create main row for dish info
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${dish_name}</td>
                    <td>${calories}</td>
                    <td>${proteins}</td>
                    <td>${fats ? fats.total : 'N/A'}</td>
                    <td>${carbohydrates}</td>
                    <td><button class="btn btn-primary show-recipe">Show Recipe</button></td>
                `;
                tableBody.appendChild(row);

                // Create row for recipe (hidden by default)
                const recipeRow = document.createElement('tr');
                recipeRow.className = 'recipe-row';
                recipeRow.style.display = 'none';
                recipeRow.innerHTML = `
                    <td colspan="6" class="recipe">${preparation_instructions}</td>
                `;
                tableBody.appendChild(recipeRow);
            });

            // Attach event handler for 'Show Recipe' buttons
            const showRecipeButtons = document.querySelectorAll('.show-recipe');
            showRecipeButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const recipeRow = button.closest('tr').nextElementSibling;
                    const otherRecipeRows = document.querySelectorAll('.recipe-row:not(.recipe-row:empty)');
                    otherRecipeRows.forEach((row) => row.style.display = 'none');
                    recipeRow.style.display = recipeRow.style.display === 'none' ? 'table-row' : 'none';
                });
            });

            // Clear any previous error messages if dishes are found
            setError('');
        }
    };


    return (
        <div className="container meal-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-12 meal-left hero-text order-md-0 order-0 center">
                                <div className="row center">
                                    <div className="col-12">
                                        <h1>Meal Planner</h1>
                                    </div>
                                    <form onSubmit={handleSubmit} id="user-info-form" className='col-12'>
                                        <div className=" center row ">
                                            <label htmlFor="height" className="col-6 pt-5">Height (in cm):</label>
                                            <div className="col-6"><input type="number" id="height" className='w-100' name="height" min="0" value={height} onChange={(e) => setHeight(e.target.value)} required /></div>
                                        </div>
                                        <div className=" center row ">
                                            <label htmlFor="weight" className="col-6 pt-5">Weight (in kg):</label>
                                            <div className="col-6"><input type="number" id="weight" name="weight" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} required /></div>
                                        </div>
                                        <div className=" center row gender">
                                            <label htmlFor="gender" className="col-6">Gender:</label>
                                            <div className="col-6 gender">
                                                <input type="radio" value="M" id="male" name="gender" checked={gender === 'M'} onChange={() => setGender('M')} required /> <label htmlFor="male" className="ml-3 mr-5 genderLabel">Male</label>
                                                <input type="radio" value="F" id="female" name="gender" checked={gender === 'F'} onChange={() => setGender('F')} required /><label className="ml-3 genderLabel" htmlFor="female">Female</label>
                                            </div>
                                        </div>
                                        <div className=" center row ">
                                            <label htmlFor="age" className="col-6 pt-5">Age:</label>
                                            <div className="col-6">
                                                <input type="number" id="age" min="0" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className=" center">
                                            <button type="submit" id="generate-plan">Generate Meal Plan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 meal order-md-1 order-1">
                                <div className="meal-plan" id="meal-plan">
                                    <table className="table mt-5">
                                        <thead>
                                            <tr>
                                                <th>Food</th>
                                                <th>Calories</th>
                                                <th>Protein</th>
                                                <th>Fat</th>
                                                <th>Carbs</th>
                                                <th>Recipe</th>
                                            </tr>
                                        </thead>
                                        <tbody id="food-table-body">

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
