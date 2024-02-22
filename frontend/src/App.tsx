import RecipesList from "./components/RecipesList";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

const App = () => {
  return (
    <>
      <Header />

      <main className="main__container">
        <RecipesList />
      </main>

      <Footer />
    </>
  );
};

export default App;
