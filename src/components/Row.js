import React from 'react';
import '../index.css';

export default function Row({ guess }) {
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

    // If there are no guess, this will return.
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
