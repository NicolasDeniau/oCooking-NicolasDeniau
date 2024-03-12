import { useEffect, useState } from "react";

// Ajout d'un Generic Type avec <Type> à la fonction useFetch
export const useFetch = <T>(url: string, options = {}) => {
    const [isLoading, setIsLoading] = useState(true);
    // Ajout de <Type> afin d'avoir un type généralisé sur l'état data
    const [data, setData] = useState<T | null>(null);
    const [errors, setErrors] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + url, options)

                const data = await response.json();
    
                if (response.ok) {
                    setData(data);
                }
            } catch(err) {
                setErrors(err);
            } finally {
                setIsLoading(false);
            }
        }

        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

    return {isLoading, data, errors};
};