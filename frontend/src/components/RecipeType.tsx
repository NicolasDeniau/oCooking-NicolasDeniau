import { RecipeTypeProps } from "../@types/recipe";
import "../assets/styles/recipeType.scss";

const RecipeType = ({type}: RecipeTypeProps) => {
    return (
        <button className={`type--${type}`}>{type}</button>
    )
};

export default RecipeType;