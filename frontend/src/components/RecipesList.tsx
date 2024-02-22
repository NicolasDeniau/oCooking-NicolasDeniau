import { useState } from "react";
import { recipesData } from "../data";
import RecipeCard from "./RecipeCard";
import "../assets/styles/recipesList.scss";
import { Recipe } from "../@types/recipe";

const RecipesList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>(recipesData);

    return (
        <div className="recipes__list">
            {recipes.map((recipe) => {
                return <RecipeCard recipe={recipe} key={recipe.id} />
            })}
        </div>
    );
};

export default RecipesList;