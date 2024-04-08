import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.scss";
import FoodsUi from "../../Foods/FoodsUi";

const SearchFood = () => {
    const [searchedFood, setSearchedFood] = useState([]); // Initialize with an empty array
    const { mealName } = useParams();

    useEffect(() => {
        axios(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
        )
            .then((res) => setSearchedFood(res.data.meals || [])) // Ensure meals is always an array
            .catch((error) => console.error("Error data:", error));
    }, [mealName]);

    return (
        <div className="container">
            <div className="row">
                <div className="searchFood">
                    {searchedFood.length === 0 ? (
                        <h4>Sorry we don't have this food</h4>
                    ) : (
                        searchedFood.map((el) => (
                            <div key={el.idMeal}>
                                <FoodsUi el={el} key={el.mealId} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchFood;
