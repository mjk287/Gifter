import React from 'react'

class CreatePage extends React.Component {
  state = {
    gift: {
      note: '',
      img: '',
      sender_id: this.props.userObj.user.id,
      user_id: 0,
      date: new Date()
    },
    users: []
  }

  handleChange = (e) => {
    this.setState({
      gift: {
        ...this.state.gift,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e, gift) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/gifts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({...gift})
    })
  }

  optionMap = () => {
    return this.state.users.map(user => <option value={user.id}>{user.first_name} {user.last_name}</option>)
  }

  render(){
    return(
      <div>
        <h1>Send Gift</h1>
        <form onSubmit={(e) => this.handleSubmit(e, this.state.gift)}>
          <label htmlFor="note">Note</label>
          <input type='text' name='note' placeholder='Message' value={this.state.note} onChange={this.handleChange} required></input>
          <label htmlFor="img">Image URL</label>
          <input type='text' name='img' placeholder='Image URL' value={this.state.img} onChange={this.handleChange} required></input>
          <select name='user_id' onChange={this.handleChange}>{this.optionMap()}</select>
          <p>From: <i>{this.props.userObj.user.first_name} {this.props.userObj.user.last_name}</i></p>
          <button>Send Gift</button>
        </form>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(allUsers => {
        const users = allUsers.filter(user => user.id != this.props.userObj.user.id)
        this.setState({
          users
        })
      })
  }
}

export default CreatePage
