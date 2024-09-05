import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken); // Update token state
    };

    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    // Logout functionality
    const logoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    // JWT Authentication - to get the user data
    async function userAuthentication() {
        try {
            const response = await fetch("http://localhost:4008/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Fix interpolation
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
            } else {
                throw new Error("Server Response Not OK");
            }
        } catch (error) {
            console.log("error fetching data");
        }
    }

    useEffect(() => {
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return authContextValue;
};
