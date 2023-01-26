import React from "react";

export default function useArray(initialValue) {
    const [array, setArray] = React.useState(initialValue);

    function push(e) {
        setArray((array) => [...array, e]);
    }

    function filter(callback) {
        setArray((array) => array.filter(callback));
    }

    function update(index, newElement) {
        setArray((array) => [
            ...array.slice(0, index),
            newElement,
            ...array.slice(index + 1, array.length),
        ]);
    }

    function remove(index) {
        setArray((array) => [
            ...array.slice(0, index),
            ...array.slice(index + 1, array.length),
        ]);
    }

    function clear() {
        setArray([]);
    }

    return { array, set: setArray, push, filter, update, remove, clear };
}
