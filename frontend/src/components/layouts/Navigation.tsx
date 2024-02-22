import { useState } from "react";
import "../../assets/styles/navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
    // isAuth = false par défaut
    const [isAuth, setIsAuth] = useState(false);
    const [fullName, setFullName] = useState<string>();

    const handleClick = () => {
        setIsAuth(!isAuth);

        if (!isAuth) {
            setFullName("Nicolas Deniau");
        } else {
            setFullName(undefined);
        }


        // Ternary
        // !isAuth ? setFullName("Jérémy Dufroy") : setFullName(undefined);
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
                {isAuth && fullName !== "" && (
                    <li>
                        <Link to="/profil">Profil: {fullName}</Link>
                    </li>
                )}
                {isAuth ? (
                    <li>
                        <a href="/">Déconnexion</a>
                    </li>
                ) : (
                    <li>
                        <Link to="/connexion">Connexion</Link>
                    </li>
                )}
            </ul>
            {/* on veut modifier la valeur du state au clic sur le bouton Se connecter */}
            <button onClick={() => handleClick()}>
                {/* si isAuth = true, alors, on affiche Se déconnecter, sinon, on affiche Se connecter */}
                {isAuth ? 'Se déconnecter' : 'Se connecter'}
            </button>
        </nav>
    );
};

export default Navigation;