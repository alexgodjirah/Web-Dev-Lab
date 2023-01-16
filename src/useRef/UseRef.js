import React from "react";

export default function UseRef() {
    const [name, setName] = React.useState("");

    const renderRef = React.useRef(0);
    const nameRef = React.useRef();
    const inputRef = React.useRef();

    React.useEffect(() => {
        nameRef.current = name; // To track previous state
        renderRef.current++;
    }, [name]);

    function handleChange(e) {
        setName(e.currentTarget.value);
    }

    function inputFocus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={handleChange} />
            <h3>Hi, my name is {name}</h3>
            <h3>{nameRef.current}</h3>

            <p>
                This is how many times the app is rendered: {renderRef.current}
            </p>

            <button onClick={() => inputFocus()}>Hocus Pocus, Be Focus</button>
        </>
    );
}
