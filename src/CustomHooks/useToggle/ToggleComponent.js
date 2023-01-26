import React from "react";
import useToggle from "./useToggle";

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false);
    return (
        <div>
            <span>{value.toString()}</span>
            <button onClick={() => toggleValue()}>toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </div>
    );
}
