import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.scss"
import MealDescUI from "./MealDescUI";
const MealDesc = () => {
    const [desc, setDesc] = useState([]);
    const { mealId } = useParams();

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((res) => {
                setDesc(res.data.meals || []);
            })
            .catch(error => {
                console.error("Error fetching meal details:", error);
            });
    }, [mealId]);

    return (
        <div className="container">
            <div className="row">
                {desc.map((el) => (
                    <MealDescUI el={el} key={el.idMeal}/>
                ))}
            </div>
        </div>
    );
};

export default MealDesc;
