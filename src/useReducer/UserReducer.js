import React from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        // break;
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default function UserReducer() {
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });
    // const [count, setCount] = React.useState(0);

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT });
        // setCount((prevCount) => prevCount--);
    }
    return (
        <div>
            <button onClick={() => decrement()}>-</button>
            <span>{state.count}</span>
            <button onClick={() => increment()}>+</button>
        </div>
    );
}
