export interface Recipe {
    id: number;
    name: string;
    description: string;
    imgSrc: string;
    ingredients: string[];
    userId: number;
};

export interface RecipeCardProps {
    recipe: Recipe
}