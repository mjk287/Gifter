import React from 'react'
import GiftCard from '../../../components/GiftCard'
import { withRouter } from 'react-router-dom'

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
        return <GiftCard handleClick={this.handleClick} gift={gift} />
    })
  }

  handleClick = (gift) => {
    if(!gift.opened) {
      fetch(`http://localhost:3000/api/v1/gifts/${gift.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ opened: true })
      })
    }
      this.props.history.push(`gifts/${gift.id}`)
  }

  render () {
    console.log(this.props.userObj.gifts)
    return (
      <div className='uk-text-center'>{!!this.props.userObj.gifts && this.makeGifts()}</div>
    )
  }
}

export default withRouter(Gifts)
