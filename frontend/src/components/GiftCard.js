import React from 'react'

const GiftCard = (props) => {

  function displayImg() {
    if(props.gift.opened) {
      return (
        <li className='uk-text-center'>
          <img src={require("../img/open-box-with-two-hearts.png")} onClick={() => props.handleClick(props.gift)}/>
            <hr />
            <p className='uk-panel gift-text'>From: {props.gift.sender_id}, <i>({props.gift.date})</i></p>
        </li>
      )
    } else {
      return (
        <li className='uk-text-center'>
          <img className='gift-box' src={require("../img/gift.png")} onClick={() => props.handleClick(props.gift)}/>
          <hr />
          <p className='uk-panel gift-text'>From: {props.gift.sender_id}, <i>({props.gift.date})</i></p>
        </li>
      )
    }
  }

  return (
    displayImg()
  )
}

export default GiftCard
