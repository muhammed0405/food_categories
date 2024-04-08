import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import FoodsUi from "../../Foods/FoodsUi";
import button from "bootstrap/js/src/button";

const FoodByLetter = () => {
    const lettersArr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "R",
        "S",
        "T",
        "V",
        "W",
        "Y",
    ];
    const [letter, setLetter] = useState("A");
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        if (letter) {
            axios(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
            )
                .then((res) => setFoods(res.data.meals || []))
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [letter]);

    return (
        <div className="container">
            <div className="row">
                <div className="FoodByLetter">
                    <div className="FoodByLetter--title">
                        <h1>List all food by first letter</h1>
                        <p>Type a letter </p>
                        <input
                            type="text"
                            name="letter input"
                            id="letter_receive_inp"
                            placeholder="letter"
                            onChange={(e) => {
                                setLetter(e.target.value);
                            }}
                        />
                    </div>

                    <div className="buttons">
                        {lettersArr.map((el, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setLetter(el);
                                }}
                            >
                                {el}
                            </button>
                        ))}
                    </div>
                    <h3 className="m-5"> Food with letter: {letter}</h3>
                    <div className="meals">
                        {foods.length === 0 ? (
                            <h3>Sorry we don't have a food with this letter</h3>
                        ) : (
                            foods.map((el) => (
                                <FoodsUi
                                    el={el}
                                    key={el.idMeal}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodByLetter;
