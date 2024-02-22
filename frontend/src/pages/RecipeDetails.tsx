import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/recipeCard.scss";

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(id);

    return (
        <>
            <article className="recipe__card">
                <div className="recipe__content">
                    <button className="recipe__button" onClick={() => navigate("/")}>Retour à l'accueil</button>
                    <h1>Recette {id}</h1>
                </div>
            </article>
        </>
    )
};

export default RecipeDetails;