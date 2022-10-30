import React from 'react';
import '../index.css';

export default function Row({ guess, currentGuess }) {
    // This will show the letter of each guess (which are passed from Grid.js)
    if (guess) {
        return (
            <div className='row past'>
                {guess.map((g, i) => (
                    <div key={i} className={g.color}>{g.key}</div>
                ))}
            </div>
        )
    }

    // This will show each letter we type inside the boxes.
    if (currentGuess) {
        // Since currentGuess parameter is a string, we need to make it as an array -- using split method -- of letter. 
        let letters = currentGuess.split('');

        return (
            <div className='row current'>
                {/* Map through each letter provided by letter variable. */}
                {letters.map((letter, idx) => (
                    <div key={idx} className='filled' >
                        {letter}
                    </div>
                ))}

                {/* This array is used to make our box still visible when we type our answer */}
                {
                    [...Array(5 - letters.length)].map((_, idx) => (
                        <div key={idx}></div>
                    ))
                }
            </div>    
        )
    }

    // If there are no guess and no currentGuess, this will return.
    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
