import React from 'react'
import Row from './Row'

export default function Grid({ currentGuess, guesses, turn }) {
    return (
        <div>
            {guesses.map((guess, idx) => {
                // To put ever letter inside the boxes by passing the data of current guess to the Row component (using turn and index to see if we input the same thing).
                if (turn === idx) {
                    console.log(turn);
                    return <Row key={idx} currentGuess={currentGuess} />
                }
                return <Row key={idx} guess={guess} />
            })}
        </div>
    )
}
