import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function LocalStorageComponent() {
    const [name, setName] = useLocalStorage("name", "");

    useUpdateLogger(name);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <span>Hi, my name is {name}</span>
        </div>
    );
}
