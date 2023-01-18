import React, { useState, useMemo, useEffect } from "react";

export default function UseMemo() {
    const [number, setNumber] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    // Used when the function is really slow, don't use too much, it can couse memoization problems.
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    // This will cause Referential Equality error => Where every render will keep printing "Theme Changed" even though the useEffect will only run when there is change in themeStyles. This happen because themeStyles will always created or called as a new object in each render which caused by changed reference.

    // const themeStyles = {
    //     backgroundColor: darkMode ? "black" : "white",
    //     color: darkMode ? "white" : "black",
    // };

    // To stop Referential Equality => By making themeStyles using useMemo hook to referencing to the changes on darkMode. If the darkMode isn't changed, then useMemo will referencing the cached version of themeStyles.
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        };
    }, [darkMode]);

    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles]);

    function slowFunction(num) {
        console.log("calling slow function");
        for (let i = 0; i <= 10000000; i++) {}
        return num * 2;
    }

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDarkMode((prevDark) => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}
