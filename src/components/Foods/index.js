import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.scss";
import FoodsUi from "./FoodsUi";

const Foods = () => {
    const [meals, setMeals] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        axios(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`,
        ).then((res) => setMeals(res.data.meals));
    }, [categoryId]);
    return (
        <>
            <div className="meals">
                {meals.map((el) => (
                    <FoodsUi el={el} key={el.idMeal} />
                ))}
            </div>
        </>
    );
};

export default Foods;
