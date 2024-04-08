import React, { useEffect, useState } from "react";
import axios from "axios";
import MealDescUI from "../../MealDesc/MealDescUI";

const RandomFood = () => {
    const [random, setRandom] = useState([]);

    const getRandomFood = () => {
        axios(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then((res) => setRandom(res.data.meals || []))
            .catch((error) => console.error("Error fetching data:", error));
    };
    return (
        <div
            style={{
                padding: " 50px  0 0 0 ",
            }}
        >
            <button className="btn btn-success" onClick={getRandomFood}>
                Get random food
            </button>
            {random.map((el) => (
                <MealDescUI el={el} key={el.idMeal} />
            ))}
        </div>
    );
};

export default RandomFood;
