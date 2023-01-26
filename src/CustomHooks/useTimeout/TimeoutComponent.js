import React from "react";
import useTimeout from "./useTimeout";

export default function TimeoutComponent() {
    const [count, setCount] = React.useState(20);
    const { clear, reset } = useTimeout(() => setCount(0), 1000);

    // React.useState(() => {
    //     console.log("state is changed and rerender happen");
    // }, [count]);
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    );
}
