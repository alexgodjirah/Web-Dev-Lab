import React from "react";
import useDebounce from "./useDebounce";

export default function DebounceComponent() {
    const [count, setCount] = React.useState(0);

    useDebounce(() => alert(count), 1000, [count]);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
        </div>
    );
}
