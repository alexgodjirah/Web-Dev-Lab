import React from "react";
import List from "./List";

export default function UseCallback() {
    const [number, setNumber] = React.useState(0);
    const [darkMode, setDarkMode] = React.useState(false);

    const getItems = React.useCallback(
        (incrementor) => {
            // Imagine this as an API that do something
            // useCallback has the same syntax and the same usage with useMemo, but the catch is that useCallback returns the whole functions (caching functions), while useMemo returns the results (caching results or values).
            // The reason why we use useCallback is the same with useMemo, only when we're worry about Referential Equality.

            const number2 = number + incrementor;

            return [number2, number2 + 1, number2 + 2];
        },
        [number]
    );

    const themeStyles = {
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
    };

    return (
        <div style={themeStyles}>
            <input
                value={number}
                type="number"
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />

            <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
                Toggle Theme
            </button>

            <List getItems={getItems} />
        </div>
    );
}
