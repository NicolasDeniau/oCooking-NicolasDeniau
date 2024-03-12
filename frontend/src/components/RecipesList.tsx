import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "../assets/styles/recipesList.scss";
import { Recipe } from "../@types/recipe";
import { useFetch } from "../hooks/useFetch";

const RecipesList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const { isLoading, data, errors } = useFetch<Recipe[]>("/recipes");

    // useEffect, lorsque le composant est monté la fonction callback de useEffect s'execute
    useEffect(() => {
        if (data) setRecipes(data);
    }, [data]);

    return (
        <div className="recipes__list">
            {errors ? (
                <p>Une erreur est survenue !</p>
            ) : (
                <>
                    {isLoading ? (
                        <p>Chargement...</p>
                    ) : (
                        <>
                            {recipes.map((recipe) => {
                                return <RecipeCard recipe={recipe} key={recipe.id} />
                            })}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default RecipesList;