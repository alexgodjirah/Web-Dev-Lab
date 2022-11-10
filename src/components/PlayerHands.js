import React, { useEffect, useState } from 'react'
import Card from '../features/Card';
import useCard from '../hooks/useCard'

export default function PlayerHands() {
  const { playerCards } = useCard('player');

  return (
    <div>
      <h2>Player Hands</h2>
      {/* {JSON.stringify(playerCards)} */}
      {
        playerCards.map(({ card, suit }, idx) => {
          return (
            <Card key={idx} card={card} suit={suit} />
          )
        }) 
      }
    </div>
  )
}
