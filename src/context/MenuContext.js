import React, { useState, createContext, useEffect } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [menu, setMenu] = useState(
        localStorage.getItem("menu") || "home"
    );

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
