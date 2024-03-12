import { useNavigate, useParams } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useEffect, useState } from "react";
import { Recipe } from "../@types/recipe";
import { useFetch } from "../hooks/useFetch";

const RecipeDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState<Recipe>();

    const {isLoading, data, errors} = useFetch<Recipe>(`/recipes/${id}`);

    useEffect(() => {
        if (data) setRecipe(data);
        if (recipe) useDocumentTitle(recipe.name);
    }, [data]);

    return (
        <>
            <button onClick={() => navigate("/")}>Retour à l'accueil</button>
            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <div>
                    <img src={recipe?.imgSrc} alt={recipe?.name} />
                    {recipe?.types.map(type => {
                        return <p key={type}>{type}</p>
                    })}
                    <h1>{recipe?.name}</h1>
                    <p>{recipe?.description}</p>
                    <h2>Ingrédients</h2>
                    {recipe?.ingredients.map(ingredient => {
                        return <p key={ingredient}>{ingredient}</p>
                    })}
                </div>
            )}
        </>
    )
};

export default RecipeDetails;