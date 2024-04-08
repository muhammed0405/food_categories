import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";

const FoodUi = ({ el, background }) => {
    const dispatch = useDispatch(); // Corrected useDispatch usage
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(10);

    const increaseCount = () => {
        setPrice((qty + 1) * 10);
        setQty(qty + 1);
        dispatch({ type: "ADD_MEAL" }); // Dispatch action to add meal
    };

    const decreaseCount = () => {
        if (qty > 1) {
            setQty(qty - 1);
            setPrice(price - 10);
            dispatch({ type: "MINUS_MEAL" }); // Dispatch action to remove meal
        }
    };

    return (
        <div
            className={"mealCard"}
            style={{
                background: `${background}`,
            }}
        >
            <Link to={`/category_meals/meal_desc/${el.idMeal}`}>
                <img src={el.strMealThumb} alt="" loading="lazy" />
            </Link>

            <h5>{el.strMeal}</h5>
            <div className="foods--count">
                <button
                    className={"btn btn-danger"}
                    disabled={qty === 1}
                    onClick={decreaseCount} // Use decreaseCount directly as onClick handler
                >
                    -
                </button>
                <p>{qty}</p>
                <button
                    className={"btn btn-success"}
                    onClick={increaseCount} // Use increaseCount directly as onClick handler
                >
                    +
                </button>
                <p>{price}$</p>
            </div>
        </div>
    );
};

export default FoodUi;
