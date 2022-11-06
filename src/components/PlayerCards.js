import React from 'react'

export default function PlayerCards() {
    const [suit, setSuit] = React.useState(null);
    const [card, setCard] = React.useState(null);
    
    // Card Fetcher
    React.useEffect(() => {
        fetch('http://localhost:3001/cards')
            .then(response => response.json())
            .then(data => {
                const randomCard = data[Math.floor(Math.random() * data.length)];
                setCard(randomCard.key);
            })
    }, [setCard]);

    // Suit Fetcher
    React.useEffect(() => {
        fetch('http://localhost:3001/suits')
            .then(response => response.json())
            .then(data => {
                const randomSuit = data[Math.floor(Math.random() * data.length)];
                setSuit(randomSuit.key);
            })
    }, [setSuit])
    return (
        <div>
            {card} of {suit}
        </div>
    )
}
