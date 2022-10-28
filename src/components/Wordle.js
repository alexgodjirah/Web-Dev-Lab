import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        // Clean-up function
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup])

    return (
        <div>Current Guess: {currentGuess}</div>
    )
}
