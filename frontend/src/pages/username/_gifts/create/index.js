import React from 'react'
import UIkit from 'uikit'

class CreatePage extends React.Component {
  state = {
    gift: {
      note: '',
      sender_id: this.props.userObj.user.first_name,
      user_id: 0,
      date: new Date(),
      image: null,
      song: '',
      preview: null,
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

    const data = new FormData()
    Object.keys(this.state.gift).forEach((key, value) => {
      data.append(key, this.state.gift[key])
    })

    fetch("http://localhost:3000/api/v1/gifts", {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(giftObj => {
      if(!!giftObj.user.first_name) {
        alert(`Gift Send To: ${giftObj.user.first_name}`)
      } else {
        alert('Please choose a recipient')
      }
    })
  }

  handleFileUploader = (e) => {
    this.setState({
      gift: {
        ...this.state.gift,
        image: e.target.files[0],
        preview: URL.createObjectURL(e.target.files[0])
      }

    }, () => console.log(this.state.gift))
  }

  optionMap = () => {
    return this.state.users.map(user => <option value={user.id}>{user.first_name} {user.last_name}</option>)
  }

  render(){
    return(
      <div className='uk-text-center uk-border-rounded'>
      <form onSubmit={(e) => this.handleSubmit(e, this.state.gift)}>
        <h1>Send Gift</h1>
        <div className="uk-margin">
          <div className="uk-inline uk-form-controls">
            <select className="uk-select uk-border-rounded" id="form-stacked-select" name='user_id' onChange={this.handleChange} required>
              <option selected disabled>Send To:</option>
              {this.optionMap()}
            </select>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: pencil"></span>
            <input className="uk-input uk-border-rounded" type='text' name='note' placeholder='Message' value={this.state.note} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: youtube"></span>
            <input className="uk-input uk-border-rounded" type='text' name='song' placeholder='Song URL' value={this.state.song} onChange={this.handleChange} required />
          </div>
        </div>

        <div className="js-upload uk-placeholder uk-text-center">
          <span uk-icon="icon: cloud-upload"></span>
          <span className="uk-text-middle">&nbsp;Place a photo or drawing here by</span>
          <div uk-form-custom>
            <label id='fileUploaderLabel' className="uk-link">&nbsp;selecting one
            <input type='file' name='image' onChange={this.handleFileUploader} required />
            {!!this.state.gift.preview &&
              <img className='uk-border-rounded' id='imgPreview' src={this.state.gift.preview}/>}
            </label>
          </div>
        </div>


        <p className='gift-text'>From: <i>{this.props.userObj.user.first_name} {this.props.userObj.user.last_name}</i></p>
        <button class="uk-button uk-button-primary uk-border-rounded">Send Gift</button>
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
