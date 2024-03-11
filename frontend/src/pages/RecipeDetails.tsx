import { useNavigate, useParams } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const RecipeDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useDocumentTitle("Recette");

    return (
        <>
            <button onClick={() => navigate("/")}>Retour à l'accueil</button>
            <h1>Recette {id}</h1>
        </>
    )
};

export default RecipeDetails;