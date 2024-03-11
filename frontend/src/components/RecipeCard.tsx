import { useNavigate } from "react-router-dom";
import { RecipeCardProps } from "../@types/recipe";
import "../assets/styles/recipeCard.scss";
import RecipeType from "./RecipeType";

const RecipeCard = ({recipe}: RecipeCardProps) => {
    const navigate = useNavigate();

    const navigateDetails = () => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <article className="recipe__card">
            <img src={recipe.imgSrc} alt={recipe.name} />
            <div className="recipe__content">
                <div className="recipe__types">
                    {recipe.types.map((type: string) => {
                        return <RecipeType key={type} type={type} />
                    })}
                </div>
                <h2>{recipe.name}</h2>
                <p className="recipe__author">Jérémy Dufroy</p>
                <p className="recipe__description">{recipe.description}</p>
                <button className="recipe__button" onClick={() => navigateDetails()}>Je cuisine !</button>
            </div>
        </article>
    );
};

export default RecipeCard;