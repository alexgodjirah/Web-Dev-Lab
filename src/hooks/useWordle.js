import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0); // To contain how many turn it takes to answer; up by one each time the user take a guess. 6 out of 6 and the game is finished. 
    const [currentGuess, setCurrentGuess] = useState(''); // To contain the current guess. Track what the user is currently typing. Updated each time handleKeyUp() function is called. 
    const [guesses, setGuesses] = useState([]); // Each guess is an array. Updated each time new guesses added and formatted by formatGuess() function. 
    const [history, setHistory] = useState([]); // Each guess is a string. More of less the same with guesses state, but using different data type: string. Used to make sure the user doesn't type the same guess.
    const [isCorrect, setIsCorrect] = useState(false); // Only change to true if the user wins the game. Used to call the congratulation modal.

    // Format a guess nto an array of letter objects
    // e.g. [{ key: 'a', color: 'yellow' }]
    const formatGuess = () => {
        console.log('formatting the guess:', currentGuess)
    }

    // Add a new guess to the guesses state
    // Update the isCorrect state if the guess is correct
    // Add one to the turn state
    const addNewGuess = () => {

    }

    // Handle keyup event & track current guess
    // If user presses enter, add the new guess
    const handleKeyup = ({ key }) => {
        // Submit the guess
        if (key === 'Enter') {
            // Only add guess if the turn is less than 5.
            if (turn > 5) {
                console.log('You used all of your chances');
                return;
            }
            // Don't allow duplicate words.
            if (history.includes(currentGuess)) {
                console.log('You already tried this word');
                return;
            } /* else {
                history.push(currentGuess)
            } */
            // Check word is 5 chars long. 
            if (currentGuess.length !== 5) {
                console.log('Word must be 5 chars long');
                return;
            }
            formatGuess();
        }
        // Delete the last guess
        if (key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1));
            return; // to stop other conditional because we don't need to check them all. (key === 'Backspace);
        }

        // Guard Clauses Technique
        // Check whether the key is A-Z and a-z or not
        if (!/^[A-Za-z]$/.test(key)) {
            return;
        }
        // Check the length of the guess
        if (currentGuess.length >= 5) {
            return;
        }
        setCurrentGuess(prev => prev + key);
    }

    return {
        turn, currentGuess, guesses, isCorrect, handleKeyup
    }
};

export default useWordle;