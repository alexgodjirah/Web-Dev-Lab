import React, { useState, useEffect } from "react";

export default function UseEffect() {
    const [state, setState] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error(error));
    }, [state]);

    function Button({ children }) {
        return (
            <button onClick={() => setState(`${children}`)}>{children}</button>
        );
    }

    return (
        <div>
            <Button>posts</Button>
            <Button>comments</Button>
            <Button>todos</Button>

            {items.map((item, idx) => (
                <p key={idx}>{JSON.stringify(item)}</p>
            ))}
        </div>
    );
}
