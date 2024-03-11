import RecipesList from "../components/RecipesList";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Home = () => {
    // Custom hook afin de réutiliser une logique
    useDocumentTitle("Accueil");

    return <RecipesList />
};

export default Home;