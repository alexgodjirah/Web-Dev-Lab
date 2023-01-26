import React from "react";
import useArray from "./useArray";

export default function ArrayComponent() {
    const { array, set, push, update, filter, remove, clear } = useArray([
        1, 2, 3, 4, 5, 6, 7,
    ]);

    const [number, setNumber] = React.useState(0);
    return (
        <div>
            <span>{array.join()}</span>

            <input
                type="number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
            />
            <button onClick={() => push(number)}>Add Number</button>

            <button onClick={() => set([1, 2])}>Set to 1, 2</button>
            <button onClick={() => filter((e) => e < 4)}>
                Keep numbers that less than 4
            </button>
            <button onClick={() => update(3, 1)}>
                Change the 4th element to 1
            </button>
            <button onClick={() => remove(4)}>Remove the 5th element</button>
            <button onClick={() => clear()}>Clear</button>
        </div>
    );
}
