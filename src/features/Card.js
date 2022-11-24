import React from 'react'

export default function Card({ card, suit }) {
  return (
    <div>{card} of {suit}</div>
  )
}
