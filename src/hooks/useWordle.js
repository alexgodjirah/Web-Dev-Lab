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

    }

    // Add a new guess to the guesses state
    // Update the isCorrect state if the guess is correct
    // Add one to the turn state
    const addNewGuess = () => {

    }

    // Handle keyup event & track current guess
    // If user presses enter, add the new guess
    const handleKeyup = () => {

    }
};

export default useWordle;