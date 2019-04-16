import React from 'react'

class CreatePage extends React.Component {
  state = {
    gift: {
      note: '',
      img: '',
      sender_id: this.props.userObj.user.first_name,
      user_id: 0,
      date: new Date(),
      song: ''
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
      <form onSubmit={(e) => this.handleSubmit(e, this.state.gift)}>
        <h1>Send Gift</h1>
        <div className="uk-margin">
          <div className="uk-inline uk-form-controls">
            <select className="uk-select" id="form-stacked-select">
              <option selected disabled>Send To:</option>
              {this.optionMap()}
            </select>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: pencil"></span>
            <input className="uk-input" type='text' name='note' placeholder='Message' value={this.state.note} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: image"></span>
            <input className="uk-input" type='text' name='img' placeholder='Image URL' value={this.state.img} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: youtube"></span>
            <input className="uk-input" type='text' name='song' placeholder='Song URL' value={this.state.song} onChange={this.handleChange} required />
          </div>
        </div>
        <p>From: <i>{this.props.userObj.user.first_name} {this.props.userObj.user.last_name}</i></p>
        <button class="uk-button uk-button-primary">Send Gift</button>
      </form>
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
