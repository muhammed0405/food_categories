import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./style.scss"
import Categories from "./Categories";

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => {
                setCategories(res.data.categories.filter((el, idx) => idx !== 6 && idx !== 10))
            })
    }, [])

    return (
        <header>
            <div className="container">
                <div className="home">
                    {categories.map((el)=>(
                        <Categories el={el} key={el.idCategory}/>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Home;