import React from "react";
import List from "./List";

/* 1 */ export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
};

/* 3 */ function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

/* 4 */ function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
}

export default function Todos() {
    const [name, setName] = React.useState("");
    /* 2 */ const [todos, dispatch] = React.useReducer(reducer, []);

    console.log(todos);

    function handleSubmit(e) {
        e.preventDefault();

        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {todos.map((todo, idx) => (
                <List todo={todo} key={idx} dispatch={dispatch} />
            ))}
        </div>
    );
}
