import React from "react";

export default function useUpdateLogger(value) {
    React.useEffect(() => {
        console.log(value);
    }, [value]);
}
