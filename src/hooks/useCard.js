import { useState, useEffect } from 'react';


const useCard = (owner) => {
    const [card, setCard] = useState(null); // To store card's number
    const [suit, setSuit] = useState(null); // To store card's suit
    const [round, setRound] = useState(0); // To store the game's ROUND 
    const [flop, setFlop] = useState([Array(3)]); // To store community's FLOP
    const [turn, setTurn] = useState({}); // To store community's TURN
    const [river, setRiver] = useState({}); // To store community's RIVER
    const [playerCards, setPlayerCards] = useState([Array(2)]); // To track player's cards. Has 3 keys: (id, card, suits)
    const [communityCard, setCommunityCard] = useState([Array(5)]); // To track community's cards. Has 3 keys: floop, turn, and river. Each keys has 3 keys: (id, card, suit) for each card drawn. 
    const [cardHistory, setCardHistory] = useState([]); // To track the cards issued. Has 3 keys: (id, card, suit).

    // Card Fethcer
    useEffect(() => {
        if (owner === 'player') {
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
                            id: 'player1',
                            card: dataCard[Math.floor(Math.random() * dataCard.length)].key,
                            suit: dataSuit[Math.floor(Math.random() * dataSuit.length)].key
                        };

                        newPlayerCards[1] = {
                            id: 'player2',
                            card: dataCard[Math.floor(Math.random() * dataCard.length)].key,
                            suit: dataSuit[Math.floor(Math.random() * dataSuit.length)].key
                        };

                        return newPlayerCards;
                    });
                })
                .catch(err => console.log(err));
        }

        if (owner === 'flop') {
            Promise.all([
                fetch('http://localhost:3001/cards'),
                fetch('http://localhost:3001/suits'),
            ])
                .then(([resCard, resSuit]) => {
                    return Promise.all([resCard.json(), resSuit.json()]);
                })
                .then(([dataCard, dataSuit]) => {
                    const randomCards = [
                        dataCard[Math.floor(Math.random() * dataCard.length)].key,
                        dataCard[Math.floor(Math.random() * dataCard.length)].key,
                        dataCard[Math.floor(Math.random() * dataCard.length)].key
                    ];
                    const randomSuit = [
                        dataSuit[Math.floor(Math.random() * dataSuit.length)].key,
                        dataSuit[Math.floor(Math.random() * dataSuit.length)].key,
                        dataSuit[Math.floor(Math.random() * dataSuit.length)].key
                    ];
                    return (
                        setFlop((prevFloop) => {
                            let newFlop = [...prevFloop];
                            newFlop[0] = {
                                id: 'flop1',
                                card: randomCards[0],
                                suit: randomSuit[0]
                            };
                            newFlop[1] ={
                                id: 'flop2',
                                card: randomCards[1],
                                suit: randomSuit[1]
                            };
                            newFlop[2] = {
                                id: 'flop3',
                                card: randomCards[2],
                                suit: randomSuit[2]
                            };

                            return newFlop;
                        })
                    )
                })
                .catch(err => console.log(err));
        }

        if (owner === 'turn') {
            Promise.all([
                fetch('http://localhost:3001/cards'),
                fetch('http://localhost:3001/suits'),
            ])
                .then(([resCard, resSuit]) => {
                    return Promise.all([resCard.json(), resSuit.json()])
                })
                .then(([dataCard, dataSuit]) => {
                    return setTurn({
                        id: 'turn',
                        card: dataCard[Math.floor(Math.random() * dataCard.length)].key,
                        suit: dataSuit[Math.floor(Math.random() * dataSuit.length)].key
                    })
                })
                .catch(err => console.log(err));
        }

        if (owner === 'river') {
            Promise.all([
                fetch('http://localhost:3001/cards'),
                fetch('http://localhost:3001/suits'),
            ])
                .then(([resCard, resSuit]) => {
                    return Promise.all([resCard.json(), resSuit.json()])
                })
                .then(([dataCard, dataSuit]) => {
                    return setRiver({
                        id: 'river',
                        card: dataCard[Math.floor(Math.random() * dataCard.length)].key,
                        suit: dataSuit[Math.floor(Math.random() * dataSuit.length)].key
                    })
                })
                .catch(err => console.log(err));
        }
    }, [setPlayerCards, setFlop, setTurn, setRiver])

    return  { playerCards, flop, turn, river }
}

export default useCard;