// Categories.js
import React from 'react';
import { Link } from "react-router-dom";

const Categories = ({ el }) => {
    return (
        <>
            <div className="home--categories">
                <Link to={`/category_meals/${el.strCategory}`}>
                    <img src={el.strCategoryThumb} alt="image of category" />
                </Link>
                <h4>{el.strCategory}</h4>
            </div>
        </>
    );
};

export default Categories;
