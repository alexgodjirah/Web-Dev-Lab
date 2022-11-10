import { useState, useEffect } from 'react';


const useCard = (cardNeeded) => {
    const [card, setCard] = useState(null); // To get card's number
    const [suit, setSuit] = useState(null); // To get card's suit
    // const [turn, setTurn] = useState(null); // To get card's suit
    // const [river, setriver] = useState(null); // To get card's suit
    const [playerCards, setPlayerCards] = useState([Array(2)]); // To track player's cards. Has 3 keys: (id, card, suits)
    const [communityCard, setCommunityCard] = useState([...Array(5)]); // To track community's cards. Has 3 keys: floop, turn, and river. Each keys has 3 keys: (id, card, suit) for each card drawn. 
    const [cardHistory, setCardHistory] = useState([]); // To track the cards issued. Has 3 keys: (id, card, suit).

    // Card Fethcer
    useEffect(() => {
        if (cardNeeded === 2) {
            Promise.all([
                fetch('http://localhost:3001/cards'),
                fetch('http://localhost:3001/suits'),
            ])
                .then(([resCard, resSuit]) => {
                    return Promise.all([resCard.json(), resSuit.json()]);
                })
                .then(([dataCard, dataSuit]) => {
                    return setPlayerCards(prevCard => {
                        let newPlayerCards = [...prevCard];
                        newPlayerCards[0] = {
                            id: 1,
                            card: dataCard[Math.floor(Math.random() * dataCard.length)].key,
                            suit: dataSuit[Math.floor(Math.random() * dataSuit.length)].key
                        };

                        newPlayerCards[1] = {
                            id: 2,
                            card: dataCard[Math.floor(Math.random() * dataCard.length)].key,
                            suit: dataSuit[Math.floor(Math.random() * dataSuit.length)].key
                        };

                        return newPlayerCards;
                    });
                })
                .catch(err => console.log(err));
        }
    }, [setPlayerCards])

    return  { playerCards }
}

export default useCard;