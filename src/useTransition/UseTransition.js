import React from "react";

export default function UseTransition() {
    // useTransition has the same concept with asynchronous. useTransition hook allow us to make a hierarchy of renders.
    // Only use thie hook if we meet performance trouble, not for every small changes. Because it will hurt our performance otherwise.
    const [isPending, startTransition] = React.useTransition();

    const [input, setInput] = React.useState("");
    const [list, setList] = React.useState([]);

    const LIST_SIZE = 20000;

    function handleChange(e) {
        setInput(e.target.value); // This will move first

        startTransition(() => {
            // This will move after the first move is finsihed
            const l = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value);
            }
            setList(l);
        });
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />

            {isPending
                ? "Loading..."
                : list.map((item, idx) => <div key={idx}>{item}</div>)}
        </div>
    );
}
