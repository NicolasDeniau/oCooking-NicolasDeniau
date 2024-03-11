import { useEffect, useState } from "react";
import { recipesData } from "../data";
import RecipeCard from "./RecipeCard";
import "../assets/styles/recipesList.scss";
import { Recipe } from "../@types/recipe";
import { useFetch } from "../hooks/useFetch";

const RecipesList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>(recipesData);

    const {isLoading, data, errors} = useFetch("/recipes");

    // useEffect, lorsque le composant est monté la fonction callback de useEffect s'execute
    useEffect(() => {
        setTimeout(() => {
            //setIsLoading(false);
        }, 3000);

        // Lorsque le composant est démonté (unmounted), on execute une fonction de "destruction"
        return () => {
            console.log("RecipesList unmouted");
        }
    }, []);

    return (
        <div className="recipes__list">
            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <>
                    {recipes.map((recipe) => {
                        return <RecipeCard recipe={recipe} key={recipe.id} />
                    })}
                </>
            )}
        </div>
    );
};

export default RecipesList;