import React from 'react'

class ShowPage extends React.Component {
  state = {
    note: '',
    img: '',
    user: null,
    song: ''
  }

  embedMusic = (input) => {
  const videoId = input.split('v=')[1]
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`
}

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/gifts/${this.props.id}`)
    .then(resp => resp.json())
    .then(gift => {
      this.setState({
        note: gift.note,
        img: gift.img,
        user: gift.user,
        song: gift.song,
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
        <iframe width="0" height="0" allow="autoplay" src={this.embedMusic(this.state.song)}></iframe>
      </div>
    )
  }
}

export default ShowPage
