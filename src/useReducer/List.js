import React from "react";
import { ACTIONS } from "./Todos";

export default function List({ todo, dispatch }) {
    return (
        <div style={{ color: todo.complete ? "#AAA" : "#000" }}>
            <span>{todo.name}</span>

            <button
                onClick={() =>
                    dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { id: todo.id },
                    })
                }
            >
                Toggle Todo
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: ACTIONS.DELETE_TODO,
                        payload: { id: todo.id },
                    })
                }
            >
                Delete
            </button>
        </div>
    );
}
