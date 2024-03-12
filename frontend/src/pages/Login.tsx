import React, { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.scss";
import { login } from "../api/auth";

const Login = () => {
    useDocumentTitle("Connexion");
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const data = await login(email, password);

            if (data) {
                localStorage.setItem("token", data.accessToken);
                navigate("/");
            }

        } catch(err) {
            setError("Une erreur est survenue.")
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
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********" />
                </label>
                <button type="submit">Se connecter</button>
            </form>
        </>
    )
};

export default Login;