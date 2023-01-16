import React from "react";
import DarkMode from "./DarkMode";
import { ThemeProvider } from "./ThemeProvider";

export default function UseContext() {
    return (
        <>
            <ThemeProvider>
                <DarkMode />
            </ThemeProvider>
        </>
    );
}
