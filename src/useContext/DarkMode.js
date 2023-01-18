import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeProvider";

export default function DarkMode() {
    const darkMode = useTheme();
    const toggleMode = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkMode ? "#333" : "#eee",
        color: darkMode ? "#eee" : "#333",
        margin: "0 auto",
        padding: "2rem",
    };

    return (
        <>
            <button onClick={() => toggleMode()}>Toggle Mode</button>
            <div style={themeStyles}>
                {darkMode ? `Dark Side` : "Light Side"}
            </div>
        </>
    );
}
