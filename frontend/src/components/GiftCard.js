import React from 'react'

const GiftCard = (props) => {

  function displayImg() {
    console.log(props)
    if(props.gift.opened) {
      return <li onClick={() => props.handleClick(props.gift)}><img src={require("../img/open-box-with-two-hearts.png")} />{props.gift.sender_id}</li>
    } else {
      return <li onClick={() => props.handleClick(props.gift)}><img src={require("../img/gift.png")} />{props.gift.sender_id}</li>
    }
  }

  return (
    displayImg()
  )
}

export default GiftCard
