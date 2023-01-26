import React from "react";

// This used to make our component wait for a change, not suddenly render. (Not render onMount).
export default function useUpdateEffect(callback, dependencies) {
    const firstRender = React.useRef(true);

    React.useEffect(() => {
        if (firstRender.current) {
            console.log("First Render");
            firstRender.current = false;
            return;
        }

        return callback();
    }, [...dependencies]);
}
