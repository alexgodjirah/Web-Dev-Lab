import React from "react";

export default function List({ input }) {
    const LIST_SIZE = 2000;

    const deferredInput = React.useDeferredValue(input);

    const list = React.useMemo(() => {
        const l = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>);
        }
        return l;
    }, [deferredInput]);

    React.useEffect(() => {
        console.log(`input: ${input}\n Deferred: ${deferredInput}`);
    }, [input, deferredInput]);

    return list;
}
