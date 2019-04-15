import React from 'react'

class ShowPage extends React.Component {
  state = {
    note: '',
    img: '',
    user: null,
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/gifts/${this.props.id}`)
    .then(resp => resp.json())
    .then(gift => {
      this.setState({
        note: gift.note,
        img: gift.img,
        user: gift.user
      }, () => console.log(this.state))
    })
  }

  render(){
    return(
      <div>
      { !!this.state.user &&
        <h1>From: {this.state.user.first_name}</h1>
      }
        <p>{this.state.note}</p>
        <img src={this.state.img} />
      </div>
    )
  }
}

export default ShowPage
