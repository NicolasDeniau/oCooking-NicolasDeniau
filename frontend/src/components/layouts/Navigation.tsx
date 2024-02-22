import { useState } from "react";
import "../../assets/styles/navigation.scss";

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
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Toutes les recettes</a>
                </li>
                <li>
                    <a href="/">A propos</a>
                </li>
                {isAuth && fullName !== undefined && (
                    <li>
                        <a href="/">Profil: {fullName}</a>
                    </li>
                )}
                {isAuth ? (
                    <li>
                        <a href="/">Déconnexion</a>
                    </li>
                ) : (
                    <li>
                        <a href="/">Connexion</a>
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