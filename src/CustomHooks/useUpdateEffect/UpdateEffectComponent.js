import React from "react";
import useUpdateEffect from "./useUpdateEffect";

export default function UpdateEffectComponent() {
    const [count, setCount] = React.useState(10);

    useUpdateEffect(() => alert(count), [count]);

    // React.useEffect(() => alert(count), [count]);

    return (
        <div>
            <span>{count}</span>

            <button onClick={() => setCount((count) => count + 1)}>
                Increment
            </button>
        </div>
    );
}
