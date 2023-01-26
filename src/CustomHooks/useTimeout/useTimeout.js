import React from "react";

export default function useTimeout(callback, delay) {
    const callbackRef = React.useRef(callback);
    const timeoutRef = React.useRef();

    // console.log(callback);

    React.useEffect(() => {
        callbackRef.current = callback;
        // console.log(callbackRef.current);
    }, [callback]);

    const set = React.useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = React.useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    React.useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = React.useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
}
