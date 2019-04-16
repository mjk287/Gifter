import React from 'react'

const GiftCard = (props) => {

  function displayImg() {
    console.log(props)
    if(props.gift.opened) {
      return (
        <li onClick={() => props.handleClick(props.gift)}>
          <img src={require("../img/open-box-with-two-hearts.png")} />
            <p className='uk-position-center uk-panel'>From: {props.gift.sender_id}, <i>({props.gift.date})</i></p>
        </li>
      )
    } else {
      return (
        <li onClick={() => props.handleClick(props.gift)}>
          <img src={require("../img/gift.png")} />
          <p className='uk-position-center uk-panel'>From: {props.gift.sender_id}, <i>({props.gift.date})</i></p>
        </li>
      )
    }
  }

  return (
    displayImg()
  )
}

export default GiftCard
