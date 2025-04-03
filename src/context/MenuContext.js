import React, { useState, createContext, useEffect } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [menu, setMenu] = useState("home");

    useEffect(() => {
        // Remove the value from localStorage when the component mounts for the first time
        localStorage.removeItem("menu");
    }, []);

    // Update localStorage whenever the menu changes
    useEffect(() => {
        localStorage.setItem("menu", menu);
    }, [menu]);

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuContextProvider;
