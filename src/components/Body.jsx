import React, { useState } from 'react';
import '../styles/Body.css'

export default function Body() {
    const [gender, setGender] = useState('male');
    const [goal, setGoal] = useState('lose');
    const [workoutPlan, setWorkoutPlan] = useState('');

    const generateWorkoutPlan = () => {
        let plan = "BE CONSISTENT EVERYDAY::\n";
        if (gender === 'male' && goal === 'gain') {


            plan += "- Warm-up: 5-10 minutes of light cardio\n (e.g., jogging in place, jumping jacks)\n";
            plan += "- Squats: 3 sets of 8-10 repetitions\n";
            plan += "- Push-ups: 3 sets of 8-10 repetitions\n";
            plan += "- Dumbbell Lunges: 3 sets of 8-10 repetitions per leg\n";
            plan += "- Dumbbell Shoulder Press: 3 sets of 8-10 repetitions\n";
            plan += "- Bent-Over Rows: 3 sets of 8-10 repetitions\n";
            plan += "- Bicep Curls: 3 sets of 8-10 repetitions\n";
            plan += "- Tricep Dips: 3 sets of 8-10 repetitions\n";
            plan += "- Plank: 3 sets, holding for 30-60 seconds each\n";
            plan += "\n========================================================\n";
            plan += "- Remember to adjust the weight and repetitions \naccording to your fitness level. It's essential to focus\n on proper form and gradually increase the intensity \nof your workouts over time. Additionally, \ndon't forget to prioritize rest days to allow your\n muscles to recover and grow.\n";

        }
        else if (gender === 'female' && goal === 'gain') {


            plan += "- Warm-up: 5-10 minutes of light cardio\n (e.g., jogging in place, jumping jacks)\n";
            plan += "- Bodyweight Squats: 3 sets of 8-10 repetitions\n";
            plan += "- Push-ups: 3 sets of 8-10 repetitions\n";
            plan += "- Lunges: 3 sets of 8-10 repetitions per leg\n";
            plan += "- Dumbbell Shoulder Press: 3 sets of 8-10 repetitions\n";
            plan += "- Dumbbell Rows: 3 sets of 8-10 repetitions\n";
            plan += "- Bicep Curls: 3 sets of 8-10 repetitions\n";
            plan += "- Tricep Dips: 3 sets of 8-10 repetitions\n";
            plan += "- Plank: 3 sets, holding for 30-60 seconds each\n";
            plan += "\n========================================================\n";
            plan += "- Remember to adjust the weight and repetitions \naccording to your fitness level.\n It's essential to focus on proper form and gradually \nincrease the intensity of your workouts over \ntime. Additionally, don't forget to prioritize \nrest days to allow your muscles to recover and grow.\n";

        }
        else if (gender === 'male' && goal === 'lose') {
            plan += "- Warm-up: 5-10 minutes of light \ncardio (e.g., jogging, jumping rope)\n";
            plan += "\n1] Circuit Training:\n";
            plan += "- Squats: 3 sets of 12-15 repetitions \n";
            plan += "- Push-ups: 3 sets of 12-15 repetitions\n";
            plan += "- Walking Lunges: 3 sets of 12-15 repetitions per leg\n";
            plan += "- Dumbbell Shoulder Press: 3 sets of 12-15 repetitions\n";
            plan += "- Bent-Over Rows: 3 sets of 12-15 repetitions\n";
            plan += "- Bicep Curls: 3 sets of 12-15 repetitions\n";
            plan += "- Tricep Dips: 3 sets of 12-15 repetitions\n";
            plan += "- Plank: Hold for 30-60 seconds, repeat 3 times\n";
            plan += "\n2] Cardiovascular Exercise:\n";
            plan += "- 30 minutes of moderate-intensity aerobic\n exercise (e.g., brisk walking, cycling, swimming)\n";
            plan += "\n\n====================================================";
            plan += "\n\n- Remember to adjust the weight and repetitions\n based on your fitness level. Combine this exercise \n routine with a balanced and nutritious diet to achieve\n your weight loss goals. Consult with a healthcare \nprofessional or certified trainer for personalized \nguidance and support.";
        }
        else if (gender === 'female' && goal === 'lose') {
            plan += "- Warm-up: 5-10 minutes of light cardio \n(e.g., jogging, jumping rope)\n";
            plan += "\n1] Circuit Training:\n";
            plan += "- Bodyweight Squats: 3 sets of 12-15 repetitions \n";
            plan += "- Push-ups (modified or standard): 3 sets of\n 12-15 repetitions\n";
            plan += "- Walking Lunges: 3 sets of 12-15 \nrepetitions per leg\n";
            plan += "- Dumbbell Shoulder Press: 3 sets of 12-15 repetitions\n";
            plan += "- Bent-Over Rows: 3 sets of 12-15 repetitions\n";
            plan += "- Bicep Curls: 3 sets of 12-15 repetitions\n";
            plan += "- Tricep Dips: 3 sets of 12-15 repetitions\n";
            plan += "- Plank: Hold for 30-60 seconds, repeat 3 times\n";
            plan += "\n2] Cardiovascular Exercise:\n";
            plan += "- 30 minutes of moderate-intensity aerobic \nexercise (e.g., brisk walking, cycling, swimming)\n";
            plan += "\n\n====================================================";
            plan += "\n\n- Remember to adjust the weight and repetitions \nbased on your fitness level. Combine this exercise\n routine with a balanced and nutritious diet to achieve\n your weight loss goals. Consult with a healthcare \nprofessional or certified trainer for personalized \nguidance and support.";
        }
        else {
            plan += "\n Always remeber you have to be consistent.\n";

        }
        setWorkoutPlan(plan);
    };

    return (
        <div className="container body-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <div className="row">
                            {/* Left side */}
                            <div className="col-md-6 body-left col-12 hero-text order-md-0 order-0 justify-content-center align-items-start flex-column">
                                <div className="row center">
                                    <div className="col-12 center">
                                        <h1>Workout Planner</h1>
                                    </div>
                                    <div className="col-12 center">
                                        <label htmlFor="gender" className="pt-5">Gender:</label>
                                        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="goal" className="pt-5">Which type of body you want:</label>
                                        <select id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
                                            <option value="lose">Lose Weight</option>
                                            <option value="gain">Gain Weight</option>
                                            <option value="muscle">Muscle Gainer</option>
                                            <option value="leg">Leg Workout</option>
                                            <option value="abs">Abs Workout</option>
                                        </select>
                                    </div>
                                    <div className="col-12 mt-5 center">
                                        <button id="generate-plan" onClick={generateWorkoutPlan}>Generate Workout Plan</button>
                                    </div>
                                </div>
                            </div>
                            {/* Right side */}
                            <div className="col-md-6 col-12 hero-text body order-md-1 order-1 center">
                                <div className="body-plan" id="meal-plan">
                                    <pre>{workoutPlan}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
