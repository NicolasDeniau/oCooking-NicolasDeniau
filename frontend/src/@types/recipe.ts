export interface Recipe {
    id: number;
    name: string;
    description: string;
    imgSrc: string;
    types: string[];
    ingredients: string[];
    userId: number;
};

export interface RecipeCardProps {
    recipe: Recipe;
};

export interface RecipeTypeProps {
    type: string;
}