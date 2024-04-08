import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import FoodsUi from "../../Foods/FoodsUi";

const FoodByArea = () => {
    const [areas, setAreas] = useState([]);
    const [selectedArea, setSelectedArea] = useState("");
    const [showFoods, setShowFoods] = useState([]);

    const changeArea = (el) => {
        setSelectedArea(el.strArea);
    };

    useEffect(() => {
        axios(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`,
        )
            .then((res) => setShowFoods(res.data.meals || []))
            .catch((error) => console.error("Error fetching foods:", error));
    }, [selectedArea]);

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            .then((res) => setAreas(res.data.meals || []))
            .catch((error) => console.error("Error fetching areas:", error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="foodByArea ">
                    <div className="buttons">
                        {areas.map((el) => (
                            <button
                                key={el.strArea}
                                onClick={() => changeArea(el)}
                            >
                                {el.strArea}
                            </button>
                        ))}
                    </div>
                    <div className="areaTittle">
                        <h2>Foods in {selectedArea}</h2>
                    </div>
                    <div className="meals">
                        {showFoods.map((el) => (
                            <FoodsUi
                                el={el}
                                key={el.idMeal}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodByArea;
