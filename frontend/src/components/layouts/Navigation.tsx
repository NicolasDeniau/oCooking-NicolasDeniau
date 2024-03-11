import React, { useEffect, useState } from "react";
import "../../assets/styles/navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [fullName, setFullName] = useState<string>();

  // useEffect avec observation sur le changement de l'état isAuth
  useEffect(() => {
    console.log("Connecté : ", isAuth);
  }, 
  // observation d'état
  [isAuth]);

  const handleClick = () => {
    setIsAuth(!isAuth);
    
    if (!isAuth) {
      setFullName("Nicolas D");
    } else {
      setFullName(undefined);
    }

    // Ternary
    // !isAuth ? setFullName("Nicolas D") : setFullName(undefined);
  }

  const disconnection = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setIsAuth(false);
    setFullName(undefined);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Toutes les recettes</Link>
        </li>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
        {isAuth && fullName != "" && (
          <li>
            <Link to="/profil">Profil: {fullName}</Link>
          </li>
        )}
        {isAuth ? (
          <li>
            <a href="/" onClick={(event) => disconnection(event)}>Déconnexion</a>
          </li>
        ) : (
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
        )}
      </ul>
      <button onClick={() => handleClick()}>
        {isAuth ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </nav>
  );
};

export default Navigation;