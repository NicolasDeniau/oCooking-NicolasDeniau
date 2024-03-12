import React, { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "../assets/styles/login.scss";

const Login = () => {
    useDocumentTitle("Connexion");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <h1>Connexion</h1>
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