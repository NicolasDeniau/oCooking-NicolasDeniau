import React, { useContext, useEffect, useState } from "react";
import "../../assets/styles/navigation.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navigation = () => {
  const {isAuth, user, logout} = useContext(AuthContext);

  // useEffect avec observation sur le changement de l'état isAuth
  useEffect(() => {
    console.log("Connecté : ", isAuth);
  }, 
  // observation d'état
  [isAuth]);

  const disconnection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    logout();
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Toutes les recettes</Link>
        </li>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
        {isAuth && user && (
          <li>
            <Link to="/profil">Profil: {user.firstname} {user.lastname}</Link>
          </li>
        )}
        {isAuth ? (
          <li>
            <a href="/" onClick={(e) => disconnection(e)}>Déconnexion</a>
          </li>
        ) : (
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;