import { Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Header />

      <main className="main__container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* page 404 => * = n'importe quel URL */}
          <Route path="*" element={<NotFound />} />
          <Route path="/connexion" element={<Login />} />
          <Route path='/a-propos' element={<About />} />
          <Route path="/profil" element={<Profile />} />
          {/* route avec param dynamique => aller sur une recette (:param)*/}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
