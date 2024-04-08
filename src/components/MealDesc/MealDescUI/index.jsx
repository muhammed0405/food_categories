import React from "react";

const MealDescUI = ({ el }) => {
    return (
        <div>
            <div key={el.idMeal} className="mealDesc">
                <div className="mealDesc--title">
                    <h4>{el.strMeal}</h4>
                    <img src={el.strMealThumb} alt={el.strMeal} />
                </div>

                <div className="ingredients">
                    <h4>Ingredients: </h4>

                    <div className="ingredients--title">
                        <h4>Name: </h4>
                        <h4>Measure: </h4>
                    </div>

                    {Array.from({ length: 20 }, (elem, index) => {
                        const ingredient = el[`strIngredient${index + 1}`];
                        const measure = el[`strMeasure${index + 1}`];
                        if (ingredient && measure) {
                            return (
                                <div key={index} className="ingredient">
                                    <div className="ingredient--name">
                                        <p>{`${index + 1}. ${ingredient}`}</p>
                                    </div>
                                    <div className="ingredient--measure">
                                        <p>{`${measure}`}</p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="instruction">
                    <h3>Instruction to cook : </h3>
                    <p>{el.strInstructions}</p>
                </div>

                <div className="video-container">
                    <h3> Video guide : </h3>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${el.strYoutube.split("=")[1]}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default MealDescUI;
