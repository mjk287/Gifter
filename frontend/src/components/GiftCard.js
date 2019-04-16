import React from 'react'

const GiftCard = (props) => {

  function displayImg() {
    console.log(props)
    if(props.gift.opened) {
      return (
        <a>
          <a onClick={() => props.handleClick(props.gift)}><img src={require("../img/open-box-with-two-hearts.png")} /></a>
          <p>From: {props.gift.sender_id}, <i>({props.gift.date})</i></p>
        </a>
      )
    } else {
      return (
        <a>
          <a onClick={() => props.handleClick(props.gift)}><img src={require("../img/gift.png")} /></a>
          <p>From: {props.gift.sender_id}, <i>({props.gift.date})</i></p>
        </a>
      )
    }
  }

  return (
    displayImg()
  )
}

export default GiftCard
