import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Foods from "./components/Foods";
import MealDesc from "./components/MealDesc";
import SearchFood from "./components/Pages/SearchFoods";
import FoodByLetter from "./components/Pages/FoodByLetter";
import RandomFood from "./components/Pages/RandomFood";
import FoodByArea from "./components/Pages/FoodByArea";
import FoodByIngredients from "./components/Pages/FoodByIngredients";
import SecondHeader from "./components/Header";
function App() {
    return (
        <div className="App">
            <SecondHeader />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route
                    path={"/category_meals/:categoryId"}
                    element={<Foods />}
                />
                <Route
                    path={"/category_meals/meal_desc/:mealId"}
                    element={<MealDesc />}
                />
                <Route
                    path={"/search_meal/:mealName"}
                    element={<SearchFood />}
                />
                <Route path={"/food_by_letter"} element={<FoodByLetter />} />
                <Route path={"/random_food"} element={<RandomFood />} />
                <Route path={"/food_by_area"} element={<FoodByArea />} />
                <Route path={"/food_by_ingr"} element={<FoodByIngredients />} />
            </Routes>
        </div>
    );
}

export default App;
