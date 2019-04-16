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
      <div className="uk-position-relative uk-visible-toggle uk-light" data-tabindex="-1" data-uk-slider>
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-3@m">
          {!!this.props.userObj.gifts && this.makeGifts()}
        </ul>
        <a id='slider' className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
        <a id='slider' className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
      </div>
    )
  }
}

export default withRouter(Gifts)
