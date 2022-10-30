import React from 'react'
import Row from './Row'

export default function Grid({ currentGuess, guesses, turn }) {
    return (
        <div>
            {guesses.map((guess, idx) => {
                return <Row key={idx} />
            })}
        </div>
    )
}
