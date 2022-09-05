import { useState } from "react";

export default function TodoForm ({ handleAdd }) {
    const [userInput, setUserInput] = useState('');

    const handleChange = e => {
        setUserInput(e.target.value);
    };

    const handleSubmit = e => {
        console.log(userInput);
        
        e.preventDefault();
        handleAdd(userInput);

        setUserInput('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add To Do" value={userInput} onChange={handleChange} />
                <button type="submit">Add To Do</button>
            </form>
        </div>
    )
}