import React, { useEffect, useState } from 'react'
import Card from '../features/Card';
import useCard from '../hooks/useCard'

export default function PlayerHands() {
  const { playerCards } = useCard(2);

  return (
    <div>
      <h2>Player Hands</h2>
      {/* {JSON.stringify(playerCards)} */}
      {
        playerCards.map(({ id, card, suit }) => {
          return (
            <Card key={id} card={card} suit={suit} />
          )
        }) 
      }
    </div>
  )
}
