import React from 'react'

const GiftCard = (props) => {
  return (
    <li onClick={() => props.handleClick(props.gift.id)}>{props.gift.sender_id}</li>
  )
}

export default GiftCard
