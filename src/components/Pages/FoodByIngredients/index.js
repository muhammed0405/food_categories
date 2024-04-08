import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodsUi from "../../Foods/FoodsUi";

const FoodByIngredients = () => {
    const [foods, setFoods] = useState([]);
    const [ingr, setIngr] = useState("");

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`)
            .then((res) => setFoods(res.data.meals || []))
            .catch((error) => console.log("Error Iingr ", error));
    }, [ingr]);
    return (
        <div className="container">
            <div className="row">
                <div className="foodByIngr">
                    <div
                        className="inputIngre"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="search"
                            id="inputIngre"
                            className="form-control m-5 p-1 w-25"
                            placeholder="type ingredient"
                            onChange={(e) => {
                                setIngr(e.target.value);
                            }}
                        />
                        <p className="m-3">Search food by main ingredients</p>
                    </div>

                    <div className="meals">
                        {foods.map((el) => (
                            <FoodsUi el={el} key={el.idMeal} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodByIngredients;
