import { useState } from "react";
import "../../assets/styles/navigation.scss";

const Navigation = () => {
    // isAuth = false par défaut
  const [isAuth, SetIsAuth] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Toutes les recettes</a>
        </li>
        <li>
          <a href="/">A propos</a>
        </li>
        <li>
          <a href="/">Connexion</a>
        </li>
      </ul>
      {/* on veut modifier la valeur du state au clic sur le bouton Se connecter */}
      <button onClick={() => SetIsAuth(!isAuth)}>
      {/* si isAuth = true, alors, on affiche Se déconnecter, sinon, on affiche Se connecter */}
      {isAuth ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </nav>
  );
};

export default Navigation;