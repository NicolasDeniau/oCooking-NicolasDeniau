import "../assets/styles/recipeCard.scss";

interface RecipeCardProps {
    recipe: {
        id: number;
        name: string;
        description: string;
        imgSrc: string;
        ingredients: string[];
        userId: number;
    }
}

const RecipeCard = ({recipe}: RecipeCardProps) => {
    return (
        <article className="recipe__card">
            <img src={recipe.imgSrc} alt={recipe.name} />
            <div className="recipe__content">
                <h2>{recipe.name}</h2>
                <p className="recipe__author">Nicolas Deniau</p>
                <p className="recipe__description">{recipe.description}</p>
                <button className="recipe__button">Je cuisine!</button>
            </div>
        </article>
    )
}

export default RecipeCard;