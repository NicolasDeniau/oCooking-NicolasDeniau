export const login = async (email: string, password: string) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json();

        if (response.ok) {
            return data;
        }

        throw Error("Vérifier vos identifiants");
        
    } catch(err) {
        console.log(err)
    }
}

export const currentUser = async (token: string) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/me", {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch(err) {
        console.error(err);
    }
}