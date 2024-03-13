import React, { useContext, useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "../assets/styles/login.scss";
// import { login } from "../api/auth"; on ne l'utilise plus maintenant qu'on a le contexte!
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
    useDocumentTitle("Connexion");
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Utilisation du hook useContext afin d'utiliser le context et ses propriétés (états / fonctions)
    const {login} = useContext(AuthContext);    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const success = await login(email, password);

            if (success) {
                navigate("/profil");
            }

            setError("Vérifier vos identifiants");
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <>
            <h1>Connexion</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.fr" />
                </label>
                <label htmlFor="password">
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="************" />
                </label>
                <button type="submit">Se connecter</button>
            </form>
        </>
    )
};

export default Login;