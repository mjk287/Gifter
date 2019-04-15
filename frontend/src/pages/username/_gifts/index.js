import React from 'react'

class Gifts extends React.Component {


  // getSenderName = (id) => {
  //   fetch(`http://localhost:3000/api/v1/users/${id}`)
  //   .then(resp => resp.json())
  //   .then(user => {
  //     return user.first_name
  //   })
  // }

  makeGifts = () => {
    return this.props.userObj.gifts.map(gift => {
      console.log(gift)
      return (<li>{gift.sender_id}</li>)
    })
  }

  handleClick = () => {
    
  }

  render () {
    console.log(this.props.userObj.gifts)
    return (
      <div>{!!this.props.userObj.gifts && this.makeGifts()}</div>
    )
  }
}

export default Gifts
