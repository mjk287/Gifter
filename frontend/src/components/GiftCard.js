import React from 'react'

const GiftCard = (props) => {
  return (
    <li onClick={() => props.handleClick(props.gift.id)}><img src={require("../img/open-box-with-two-hearts.png")}/>{props.gift.sender_id}</li>
  )
}

export default GiftCard
