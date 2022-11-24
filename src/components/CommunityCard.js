import React from 'react'
import { useState } from 'react';
import Card from '../features/Card';
import useCard from '../hooks/useCard';


export default function CommunityCard() {
    const { communityCard } = useCard('community');
    
    const flop = communityCard.slice(0, 3);
    const turn = communityCard.slice(3,-1);
    const river = communityCard.slice(4);
    
    const [round, setRound] = useState(3);

    if (!round) {
        return ( 
            <div>
                <h2>Community Card</h2>
            </div>
        )
    }

    if (round === 1) {
        return (
            <div>
                <h2>Community Card</h2>
                <h3>Flop</h3>
                {
                    flop.map(({ card, suit }, idx) => {
                        return (
                            <Card key={idx} card={card} suit={suit} />
                            )
                        }) 
                    }
            </div>
        )
    }
    
    if (round === 2) {
        return (
            <div>
                <h2>Community Card</h2>
                <h3>Flop</h3>
                {
                   flop.map(({ card, suit }, idx) => {
                    return (
                        <Card key={idx} card={card} suit={suit} />
                    )
                   }) 
                }

                <h3>Turn</h3>
                {/* {JSON.stringify(turn)} */}
                {turn.card} of {turn.suit}
            </div>
        )
    }
    
    if (round === 3) {
        return (
            <div>
                <h2>Community Card</h2>
                <h3>Flop</h3>
                {/* {JSON.stringify(flop)} */}
                {
                    flop.map(({ card, suit }, idx) => {
                        return (
                            <Card key={idx} card={card} suit={suit} />
                        )
                    }) 
                }
                
                <h3>Turn</h3>
                {/* {JSON.stringify(turn)} */}
                {turn.map(({ card, suit }, idx) => {
                    return (
                        <Card key={idx} card={card} suit={suit} />
                    )
                })}

                <h3>River</h3>
                {/* {JSON.stringify(river)} */}
                {river.map(({ card, suit }, idx) => {
                    return (
                        <Card key={idx} card={card} suit={suit} />
                    )
                })}
            </div>
        )
    }
}
