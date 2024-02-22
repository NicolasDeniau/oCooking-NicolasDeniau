import { useParams } from "react-router-dom";

const RecipeDetails = () => {
    const {id} = useParams();

    console.log(id);

    return (
        <>
            <h1>Recette {id}</h1>
        </>
    )
};

export default RecipeDetails;