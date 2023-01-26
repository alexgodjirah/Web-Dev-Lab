import React from "react";
import usePrevious from "./usePrevious";

export default function PreviousComponent() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("alex");
    const prevCount = usePrevious(count);

    return (
        <div>
            <div>
                {count} - {prevCount};
            </div>

            <span>{name}</span>

            <button
                onClick={() => setCount((currentCount) => currentCount + 1)}
            >
                Increment
            </button>

            <button onClick={() => setName("Gozali")}>Change Name</button>
        </div>
    );
}
