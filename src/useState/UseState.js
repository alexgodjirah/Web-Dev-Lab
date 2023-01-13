import React from "react";

export default function UseState() {
    const [name, setName] = React.useState("");
    const [count, setCount] = React.useState(() => {
        return 10;
    });
    const [object, setObject] = React.useState({
        fname: "",
        lname: "",
    });

    function handleChange(e) {
        setName(e.currentTarget.value);
    }

    function handleFname(e) {
        setObject((prevObject) => {
            return { ...prevObject, fname: e.target.value };
        });
    }

    function handleLname(e) {
        setObject((prevObject) => {
            return { ...prevObject, lname: e.target.value };
        });
    }

    function decrement() {
        setCount((prevCount) => prevCount - 1);
    }

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div
            style={{
                width: 1000,
                margin: `0 auto`,
                border: `1px solid black`,
            }}
        >
            <input value={name} onChange={handleChange} />
            <h1>My name is {name}</h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: `space-between`,
                    alignItems: "center",

                    width: `30%`,
                    margin: `0 auto`,
                }}
            >
                <button
                    style={{ width: `2rem`, height: `2rem` }}
                    onClick={() => decrement()}
                >
                    -
                </button>
                <h1>{count}</h1>
                <button
                    style={{ width: `2rem`, height: `2rem` }}
                    onClick={() => increment()}
                >
                    +
                </button>
            </div>

            <div>
                <label htmlFor="fname">First Name</label>
                <input
                    name="fname"
                    value={object.fname}
                    onChange={handleFname}
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    name="lname"
                    value={object.lname}
                    onChange={handleLname}
                />
                <h1>
                    Hi, I'm {object.fname} {object.lname}
                </h1>
            </div>
        </div>
    );
}
