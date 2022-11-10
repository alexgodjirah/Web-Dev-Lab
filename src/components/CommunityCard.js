import React from 'react'
import Card from '../features/Card';
import useCard from '../hooks/useCard';


export default function CommunityCard() {
    const { flop } = useCard('flop');
    const { turn } = useCard('turn');
    const { river } = useCard('river');

    return (
        <div>
            <h3>Flop</h3>
            {flop.map(({ card, suit}, idx) => {
                return (
                    <Card key={idx} card={card} suit={suit} />
                )
            })}

            <h3>Turn</h3>
            <Card key={turn.id} card={turn.card} suit={turn.suit} />

            <h3>River</h3>
            <Card key={river.id} card={river.card} suit={river.suit} />
        </div>
    )
}
