import React from "react";
import List from "./List";

export default function UseDeferredValue() {
    const [input, setInput] = React.useState("");
    return (
        <div>
            <input
                value={input}
                type="text"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />

            <List input={input} />
        </div>
    );
}
