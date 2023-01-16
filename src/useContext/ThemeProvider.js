import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function toggleMode() {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <>
            <ThemeContext.Provider value={darkMode}>
                <ThemeUpdateContext.Provider value={toggleMode}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}
