import React from "react";

export default function usePrevious(value) {
    const currentRef = React.useRef(value);
    const prevRef = React.useRef();

    console.log(currentRef.current);

    if (currentRef.current !== value) {
        prevRef.current = currentRef.current;
        currentRef.current = value;
    }
    console.log(currentRef.current);

    return prevRef.current;
}
