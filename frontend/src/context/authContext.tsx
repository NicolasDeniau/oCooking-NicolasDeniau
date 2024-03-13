import { ReactNode, createContext, useEffect, useState } from "react";
import { login as authLogin, currentUser as authCurrentUser } from "../api/auth";
import { User } from "../@types/user";
import { useNavigate } from "react-router-dom";

interface AuthContextInterface {
    isAuth: boolean,
    token: string | null,
    user: User | null,
    login: (email: string, password: string) => Promise<boolean>,
    logout: () => void
}

export const AuthContext = createContext<AuthContextInterface>({
    isAuth: false,
    token: null,
    user: null,
    login: async () => false,
    logout: () => {}
})

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const storageToken = localStorage.getItem("token");

        const currentUser = async (token: string) => {
            const data = await authCurrentUser(token);
            setUser(data.user);
        }

        if (storageToken) {
            setIsAuth(true);
            setToken(storageToken);
            currentUser(storageToken);
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const data = await authLogin(email, password);

            if (data) {
                setIsAuth(true);
                setToken(data.accessToken);
                localStorage.setItem("token", data.accessToken);
                setUser(data.user);
                return true;
            }

            return false;
        } catch(err) {
            console.error(err);
            return false;
        }
    }

    const logout = () => {
        setIsAuth(false);
        setToken(null);
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{isAuth, token, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}