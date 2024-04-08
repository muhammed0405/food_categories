import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function SecondHeader() {
    const basket = useSelector((state) => state.basket);
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const searchFood = () => {
        navigate(`/search_meal/${value}`);
    };

    const keyEnter = (e) => {
        if (e.key === "Enter" && value.trim() !== "") {
            navigate(`/search_meal/${value}`);
        }
    };
    return (
        <header className="header">
            <div className="nav--bar">
                <div className="logo">
                    <NavLink to="/">
                        Humayun.<span>K</span>
                    </NavLink>
                </div>
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">
                    &#9776;
                </label>
                <ul className="menu">
                    <li>
                        <NavLink to={"/"}>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/fried"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/food_by_letter"}>Letter</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/random_food"}>Random </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/food_by_area"}>Area</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/food_by_ingr"}>Ingredients</NavLink>
                    </li>
                </ul>
            </div>

            <div className="basket">
                <input
                    type="search"
                    name="food_name"
                    id="header_input"
                    placeholder="search food..."
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        keyEnter(e);
                    }}
                />

                <i>
                    <IoMdSearch
                        onClick={() => {
                            searchFood();
                        }}
                    />
                </i>
                <i>
                    <FaShoppingBag />
                </i>

                <p>{basket}</p>
            </div>
        </header>
    );
}

export default SecondHeader;
